'use client';

import { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  RotateCw,
  RotateCcw,
  Pause,
  Focus,
  X,
  Layers,
  ChevronRight,
  Info,
  Maximize2,
  Sliders,
  ExternalLink,
  Activity,
  Zap,
  Heart,
  Droplets,
  Target,
  MapPin,
  Stethoscope,
  Bone,
  ShieldCheck
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import AtlasScene from './AtlasScene';
import {
  DEFAULT_VISIBLE,
  SYSTEMS,
  getExplanation,
  type Atlas,
  type Concept,
  type SceneState,
  type SystemId,
  type View
} from './types';
import {
  getAnatomyMedicalDetails,
  type AnatomyMedicalInfo
} from './medical-knowledge';

interface AnatoAtlasExplorerProps {
  initialVisibleSystems?: SystemId[];
  isEmbedded?: boolean;
  className?: string;
}

export function AnatoAtlasExplorer({
  initialVisibleSystems = DEFAULT_VISIBLE,
  isEmbedded = false,
  className = ''
}: AnatoAtlasExplorerProps) {
  const [atlas, setAtlas] = useState<Atlas | null>(null);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState('');
  
  const [state, setState] = useState<SceneState>({
    explode: 0,
    visible: initialVisibleSystems,
    selected: [],
    isolate: false,
    view: 'three-quarter',
    rotate: false,
    reset: 0
  });

  const [panel, setPanel] = useState<'layers' | 'search' | 'info' | null>(null);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [chosenConcept, setChosenConcept] = useState<Concept | null>(null);

  // Load atlas.json
  useEffect(() => {
    const abort = new AbortController();
    setProgress(0);
    setError('');

    fetch('/models/atlas/atlas.json', { signal: abort.signal })
      .then(res => {
        if (!res.ok) throw new Error('Katalog anatomi tidak dapat dimuat.');
        return res.json();
      })
      .then((data: Atlas) => {
        setAtlas(data);
      })
      .catch(err => {
        if (err.name !== 'AbortError') setError(err.message || 'Gagal memuat katalog anatomi.');
      });

    return () => abort.abort();
  }, []);

  const partsMap = useMemo(() => new Map(atlas?.parts.map(p => [p.id, p])), [atlas]);

  const systemCounts = useMemo(() => {
    return Object.fromEntries(
      SYSTEMS.map(s => [s.id, atlas?.parts.filter(p => p.system === s.id).length ?? 0])
    );
  }, [atlas]);

  const activeSystems = useMemo(() => SYSTEMS.filter(s => systemCounts[s.id] > 0), [systemCounts]);

  const selectedParts = useMemo(
    () => state.selected.map(id => partsMap.get(id)).filter(p => !!p),
    [state.selected, partsMap]
  );
  const activeSelectedPart = selectedParts[0];
  const activeSystemDef = SYSTEMS.find(s => s.id === activeSelectedPart?.system);

  const medicalInfo = useMemo<AnatomyMedicalInfo | null>(() => {
    if (!activeSelectedPart) return null;
    const nameToMatch = chosenConcept?.name || activeSelectedPart.name;
    return getAnatomyMedicalDetails(nameToMatch, activeSelectedPart.system);
  }, [chosenConcept, activeSelectedPart]);

  const visiblePartsCount = useMemo(() => {
    if (!atlas) return 0;
    return atlas.parts.filter(p =>
      state.isolate ? state.selected.includes(p.id) : state.visible.includes(p.system) || state.selected.includes(p.id)
    ).length;
  }, [atlas, state.isolate, state.selected, state.visible]);

  // Search results
  const searchResults = useMemo(() => {
    if (!atlas) return [];
    const q = searchQuery.toLowerCase().trim();
    if (!q) {
      return ['heart', 'brain', 'liver', 'stomach', 'femur', 'kidney', 'lung', 'skull']
        .map(n => atlas.concepts.find(c => c.name.toLowerCase().includes(n)))
        .filter((c): c is Concept => !!c);
    }
    return atlas.concepts
      .filter(c => c.name.toLowerCase().includes(q) || c.id.toLowerCase().includes(q))
      .slice(0, 50);
  }, [atlas, searchQuery]);

  const handleSelectPart = (id: string) => {
    const p = partsMap.get(id);
    if (!p) return;
    setChosenConcept({ id: p.conceptId, name: p.name, elements: [id] });
    setState(s => ({ ...s, selected: [id], isolate: false, rotate: false }));
    setDetailsOpen(true);
    setPanel(null);
  };

  const handleSelectConcept = (c: Concept) => {
    setChosenConcept(c);
    setState(s => ({ ...s, selected: c.elements, isolate: false, rotate: false }));
    setDetailsOpen(true);
    setPanel(null);
  };

  const toggleSystem = (id: SystemId) => {
    setDetailsOpen(false);
    setState(s => ({
      ...s,
      selected: [],
      isolate: false,
      visible: s.visible.includes(id) ? s.visible.filter(x => x !== id) : [...s.visible, id]
    }));
  };

  const resetAll = () => {
    setState({
      explode: 0,
      visible: initialVisibleSystems,
      selected: [],
      isolate: false,
      view: 'three-quarter',
      rotate: false,
      reset: state.reset + 1
    });
    setChosenConcept(null);
    setDetailsOpen(false);
    setPanel(null);
  };

  return (
    <div
      className={`relative w-full overflow-hidden bg-[#050511] select-none ${
        isEmbedded ? 'h-[600px] rounded-2xl border border-white/10' : 'h-screen'
      } ${className}`}
    >
      {/* 3D WebGL Canvas */}
      {atlas && (
        <AtlasScene
          atlas={atlas}
          state={{
            ...state,
            inspectorOpen: detailsOpen && selectedParts.length > 0
          }}
          onSelect={handleSelectPart}
          onProgress={n => {
            setProgress(n);
            if (n === 100) setError('');
          }}
          onError={setError}
          theme="dark"
        />
      )}

      {/* Header Overlay */}
      <div className="absolute top-4 left-4 md:top-6 md:left-6 z-20 pointer-events-none">
        <div className="flex items-center gap-2 mb-1">
          <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse shadow-[0_0_10px_#38bdf8]" />
          <span className="text-[10px] md:text-xs font-semibold tracking-widest text-sky-400 uppercase">
            AnatoSmart 3D Atlas
          </span>
        </div>
        <h1 className="text-xl md:text-2xl font-bold text-white tracking-tight flex items-center gap-2">
          Anatomi Tubuh Manusia
          <Badge variant="outline" className="text-[10px] border-sky-400/40 text-sky-300 bg-sky-500/10">
            3D Interaktif
          </Badge>
        </h1>
        <p className="text-[11px] md:text-xs text-slate-400">
          {atlas ? `${atlas.parts.length.toLocaleString()} Organ Individual` : '2.234 Bagian'} • BodyParts3D 4.0
        </p>
      </div>

      {/* Top Action Buttons */}
      <div className="absolute top-4 right-4 md:top-6 md:right-6 z-20 flex items-center gap-2">
        <Button
          variant="outline"
          size="sm"
          className="bg-[#0a0f1d]/80 backdrop-blur-md border-white/15 hover:border-sky-500/50 text-slate-200 hover:text-white text-xs h-9 gap-2 shadow-lg"
          onClick={() => setPanel(p => (p === 'search' ? null : 'search'))}
        >
          <Search className="w-3.5 h-3.5 text-sky-400" />
          <span className="hidden sm:inline">Cari Organ</span>
        </Button>

        <Button
          variant="outline"
          size="sm"
          className={`h-9 gap-2 bg-[#0a0f1d]/80 backdrop-blur-md border-white/15 hover:border-sky-500/50 text-xs shadow-lg ${
            panel === 'layers' ? 'border-sky-500 text-sky-300' : 'text-slate-200 hover:text-white'
          }`}
          onClick={() => setPanel(p => (p === 'layers' ? null : 'layers'))}
        >
          <Layers className="w-3.5 h-3.5 text-sky-400" />
          <span className="hidden sm:inline">Sistem Organ</span>
          <Badge variant="secondary" className="text-[10px] bg-sky-500/20 text-sky-300 px-1 py-0 h-4">
            {activeSystems.length}
          </Badge>
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="w-9 h-9 bg-[#0a0f1d]/80 backdrop-blur-md border border-white/15 text-slate-300 hover:text-white"
          onClick={() => setPanel(p => (p === 'info' ? null : 'info'))}
        >
          <Info className="w-4 h-4 text-sky-400" />
        </Button>
      </div>

      {/* Camera View Angle Selector */}
      <div className="absolute top-20 right-4 md:top-24 md:right-6 z-20 flex flex-col gap-1.5 bg-[#0a0f1d]/80 backdrop-blur-md border border-white/10 rounded-xl p-1.5 shadow-xl">
        {(['three-quarter', 'front', 'side', 'back'] as View[]).map((v, i) => (
          <Button
            key={v}
            variant="ghost"
            size="sm"
            className={`w-8 h-8 p-0 text-xs font-semibold rounded-lg ${
              state.view === v
                ? 'bg-sky-500 text-white shadow-[0_0_12px_rgba(56,189,248,0.4)]'
                : 'text-slate-400 hover:text-white hover:bg-white/10'
            }`}
            onClick={() => setState(s => ({ ...s, view: v, reset: s.reset + 1, rotate: false }))}
            title={`Pandangan: ${v}`}
          >
            {['¾', 'Ant', 'Lat', 'Post'][i]}
          </Button>
        ))}

        <div className="w-full h-px bg-white/10 my-1" />

        <Button
          variant="ghost"
          size="sm"
          className={`w-8 h-8 p-0 rounded-lg ${
            state.rotate ? 'bg-sky-500/20 text-sky-300' : 'text-slate-400 hover:text-white hover:bg-white/10'
          }`}
          onClick={() => setState(s => ({ ...s, rotate: !s.rotate }))}
          title="Auto Rotasi"
        >
          {state.rotate ? <Pause className="w-3.5 h-3.5" /> : <RotateCw className="w-3.5 h-3.5" />}
        </Button>

        <Button
          variant="ghost"
          size="sm"
          className="w-8 h-8 p-0 text-slate-400 hover:text-white hover:bg-white/10 rounded-lg"
          onClick={resetAll}
          title="Reset Sudut Pandang"
        >
          <RotateCcw className="w-3.5 h-3.5" />
        </Button>
      </div>

      {/* Floating System Layers Panel */}
      <AnimatePresence>
        {panel === 'layers' && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="absolute top-20 left-4 md:top-24 md:left-6 z-30 w-72 max-h-[calc(100vh-220px)] bg-[#0a0f1d]/95 backdrop-blur-xl border border-white/15 rounded-2xl p-4 shadow-2xl flex flex-col"
          >
            <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3">
              <span className="font-semibold text-sm text-white flex items-center gap-2">
                <Layers className="w-4 h-4 text-sky-400" />
                Sistem Anatomi
              </span>
              <Button
                variant="ghost"
                size="icon"
                className="w-6 h-6 text-slate-400 hover:text-white"
                onClick={() => setPanel(null)}
              >
                <X className="w-4 h-4" />
              </Button>
            </div>

            {/* Presets */}
            <div className="grid grid-cols-3 gap-1.5 mb-3">
              <Button
                variant="outline"
                size="sm"
                className="text-[11px] h-7 bg-white/5 border-white/10 text-slate-300 hover:text-white"
                onClick={() =>
                  setState(s => ({ ...s, selected: [], isolate: false, visible: activeSystems.map(x => x.id) }))
                }
              >
                Semua
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="text-[11px] h-7 bg-white/5 border-white/10 text-slate-300 hover:text-white"
                onClick={() =>
                  setState(s => ({ ...s, selected: [], isolate: false, visible: ['skeletal', 'muscular'] }))
                }
              >
                Muskulo
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="text-[11px] h-7 bg-white/5 border-white/10 text-slate-300 hover:text-white"
                onClick={() =>
                  setState(s => ({
                    ...s,
                    selected: [],
                    isolate: false,
                    visible: ['cardiac', 'respiratory', 'digestive', 'urinary', 'endocrine', 'reproductive']
                  }))
                }
              >
                Visera
              </Button>
            </div>

            {/* Systems Scroll List */}
            <div className="flex-1 overflow-y-auto pr-1 space-y-1.5 custom-scrollbar text-xs">
              {activeSystems.map(s => {
                const isEnabled = state.visible.includes(s.id);
                return (
                  <div
                    key={s.id}
                    className={`flex items-center justify-between p-2 rounded-lg transition-colors ${
                      isEnabled ? 'bg-white/10 text-white' : 'bg-transparent text-slate-400 hover:bg-white/5'
                    }`}
                  >
                    <button
                      className="flex items-center gap-2 text-left flex-1 truncate"
                      onClick={() => setState(v => ({ ...v, visible: [s.id], isolate: false, selected: [] }))}
                      title={`Tampilkan hanya ${s.nameId}`}
                    >
                      <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: s.color }} />
                      <span className="truncate font-medium">{s.nameId}</span>
                      <span className="text-[10px] text-slate-500 ml-auto mr-2">{systemCounts[s.id]}</span>
                    </button>
                    <Switch
                      checked={isEnabled}
                      onCheckedChange={() => toggleSystem(s.id)}
                      className="data-[state=checked]:bg-sky-500 scale-75"
                    />
                  </div>
                );
              })}
            </div>

            <div className="pt-3 border-t border-white/10 mt-3 flex items-center justify-between text-[11px] text-slate-400">
              <span>{visiblePartsCount.toLocaleString()} organ aktif</span>
              <button
                className="text-sky-400 hover:underline"
                onClick={() => setState(s => ({ ...s, visible: [], selected: [], isolate: false }))}
              >
                Sembunyikan
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Search Panel */}
      <AnimatePresence>
        {panel === 'search' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-20 right-4 md:top-24 md:right-6 z-30 w-80 max-h-[calc(100vh-220px)] bg-[#0a0f1d]/95 backdrop-blur-xl border border-white/15 rounded-2xl p-4 shadow-2xl flex flex-col"
          >
            <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3">
              <span className="font-semibold text-sm text-white flex items-center gap-2">
                <Search className="w-4 h-4 text-sky-400" />
                Cari Organ & Struktur
              </span>
              <Button
                variant="ghost"
                size="icon"
                className="w-6 h-6 text-slate-400 hover:text-white"
                onClick={() => setPanel(null)}
              >
                <X className="w-4 h-4" />
              </Button>
            </div>

            <div className="relative mb-3">
              <input
                autoFocus
                type="text"
                placeholder="Cari Jantung, Femur, Aorta..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full bg-white/5 border border-white/15 rounded-xl px-3 py-2 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-sky-400"
              />
            </div>

            <div className="flex-1 overflow-y-auto space-y-1 pr-1 custom-scrollbar">
              {searchResults.length === 0 ? (
                <p className="text-center text-xs text-slate-500 py-6">Organ tidak ditemukan.</p>
              ) : (
                searchResults.map(c => (
                  <button
                    key={c.id}
                    onClick={() => handleSelectConcept(c)}
                    className="w-full text-left p-2 rounded-lg hover:bg-sky-500/10 hover:text-sky-300 text-slate-300 transition-all text-xs flex items-center justify-between group"
                  >
                    <span className="capitalize font-medium">{c.name}</span>
                    <span className="text-[10px] text-slate-500 group-hover:text-sky-400">
                      {c.elements.length} bagian
                    </span>
                  </button>
                ))
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Info & Credits Panel */}
      <AnimatePresence>
        {panel === 'info' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="absolute top-20 right-4 md:top-24 md:right-6 z-30 w-80 bg-[#0a0f1d]/95 backdrop-blur-xl border border-white/15 rounded-2xl p-5 shadow-2xl"
          >
            <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3">
              <span className="font-semibold text-sm text-white flex items-center gap-2">
                <Info className="w-4 h-4 text-sky-400" />
                Sumber & Lisensi
              </span>
              <Button
                variant="ghost"
                size="icon"
                className="w-6 h-6 text-slate-400 hover:text-white"
                onClick={() => setPanel(null)}
              >
                <X className="w-4 h-4" />
              </Button>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed mb-3">
              Model anatomi ini diadaptasi dari <strong>BodyParts3D 4.0</strong>, © <em>The Database Center for Life Science</em> (DBCLS), Jepang.
            </p>
            <p className="text-[11px] text-slate-400 leading-relaxed mb-4">
              Dilisensikan di bawah <strong>Creative Commons Attribution 4.0 International (CC BY 4.0)</strong>. Model mencakup 2.234 mesh beresolusi tinggi yang dirancang untuk pembelajaran anatomi interaktif.
            </p>
            <div className="text-[11px] text-sky-400 flex flex-col gap-1.5">
              <a
                href="https://dbarchive.biosciencedbc.jp/en/bodyparts3d/lic.html"
                target="_blank"
                rel="noreferrer"
                className="hover:underline flex items-center gap-1"
              >
                <span>Lisensi BodyParts3D</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href="https://academic.oup.com/nar/article/37/suppl_1/D782/1000752"
                target="_blank"
                rel="noreferrer"
                className="hover:underline flex items-center gap-1"
              >
                <span>Publikasi Riset (Mitsuhashi et al.)</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom Dock Control: Explode & Reset */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 w-[92%] max-w-lg bg-[#0a0f1d]/90 backdrop-blur-xl border border-white/15 rounded-2xl px-5 py-3.5 shadow-2xl flex items-center gap-4">
        <div className="flex-1">
          <div className="flex items-center justify-between text-xs mb-1.5">
            <span className="font-semibold text-slate-300 flex items-center gap-1.5">
              <Sliders className="w-3.5 h-3.5 text-sky-400" />
              Explode Organ (Terurai)
            </span>
            <span className="font-mono text-sky-400 font-bold">{Math.round(state.explode * 100)}%</span>
          </div>
          <Slider
            min={0}
            max={100}
            step={1}
            value={[state.explode * 100]}
            onValueChange={v => {
              const val = (Array.isArray(v) ? v[0] : v) / 100;
              setState(s => ({
                ...s,
                explode: val,
                view: val > 0.8 ? 'front' : s.view,
                rotate: false
              }));
            }}
            className="cursor-pointer"
          />
          <div className="flex justify-between text-[10px] text-slate-500 mt-1">
            <span>Tubuh Utuh</span>
            <span>Semua Organ Terpisah</span>
          </div>
        </div>

        <div className="h-8 w-px bg-white/10" />

        <Button
          variant="ghost"
          size="sm"
          className="text-slate-400 hover:text-white text-xs h-9 gap-1.5 flex flex-col items-center justify-center py-1"
          onClick={resetAll}
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span className="text-[10px]">Reset</span>
        </Button>
      </div>

      {/* Organ Detail Sheet / Modal */}
      <AnimatePresence>
        {detailsOpen && activeSelectedPart && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            className="absolute bottom-20 right-2 sm:right-4 md:bottom-24 md:right-6 z-30 w-[94vw] sm:w-[440px] md:w-[480px] max-h-[82vh] flex flex-col bg-[#0a0f1d]/95 backdrop-blur-2xl border border-sky-500/40 rounded-2xl p-4 md:p-5 shadow-[0_10px_40px_rgba(0,0,0,0.85)]"
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-3 mb-2 shrink-0">
              <div>
                <div className="flex items-center gap-1.5 mb-1 flex-wrap">
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: activeSystemDef?.color || '#38bdf8' }}
                  />
                  <span className="text-[11px] font-semibold tracking-wider text-sky-400 uppercase">
                    {activeSystemDef?.nameId || 'ANATOMI'}
                  </span>
                  {medicalInfo && (
                    <Badge variant="outline" className="text-[9px] py-0 px-1.5 border-white/20 text-slate-300">
                      {medicalInfo.type === 'muscle'
                        ? 'OTOT & KINESIOLOGI'
                        : medicalInfo.type === 'bone'
                        ? 'OSTEOLOGI & SENDI'
                        : 'ORGAN VISERAL'}
                    </Badge>
                  )}
                </div>
                <h3 className="text-base md:text-lg font-bold text-white tracking-tight capitalize leading-snug">
                  {medicalInfo?.nameLatin || chosenConcept?.name || activeSelectedPart.name}
                </h3>
                {medicalInfo?.nameId && (
                  <p className="text-xs text-slate-400 italic mt-0.5">
                    {medicalInfo.nameId}
                  </p>
                )}
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="w-7 h-7 text-slate-400 hover:text-white shrink-0"
                onClick={() => setDetailsOpen(false)}
              >
                <X className="w-4 h-4" />
              </Button>
            </div>

            {/* Scrollable Content Body */}
            <div className="flex-1 overflow-y-auto pr-1 my-2 space-y-2.5 text-xs text-slate-300 [scrollbar-width:thin] [scrollbar-color:#38bdf833_transparent]">
              {medicalInfo?.type === 'muscle' && (
                <>
                  {/* Kinesiologi Card */}
                  <div className="p-3 rounded-xl bg-purple-950/30 border border-purple-500/30">
                    <div className="flex items-center gap-1.5 text-purple-300 font-semibold mb-1 text-[11px]">
                      <Activity className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                      <span>KINESIOLOGI & FUNGSI GERAK</span>
                    </div>
                    <p className="leading-relaxed text-slate-200 text-xs">
                      {medicalInfo.kinesiologi}
                    </p>
                  </div>

                  {/* Origo & Insersio Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <div className="p-2.5 rounded-xl bg-emerald-950/25 border border-emerald-500/25">
                      <div className="flex items-center gap-1.5 text-emerald-300 font-semibold mb-1 text-[10px]">
                        <Target className="w-3 h-3 text-emerald-400 shrink-0" />
                        <span>ORIGO (PROKSIMAL)</span>
                      </div>
                      <p className="text-[11px] leading-relaxed text-slate-300">
                        {medicalInfo.origo}
                      </p>
                    </div>

                    <div className="p-2.5 rounded-xl bg-teal-950/25 border border-teal-500/25">
                      <div className="flex items-center gap-1.5 text-teal-300 font-semibold mb-1 text-[10px]">
                        <MapPin className="w-3 h-3 text-teal-400 shrink-0" />
                        <span>INSERSIO (DISTAL)</span>
                      </div>
                      <p className="text-[11px] leading-relaxed text-slate-300">
                        {medicalInfo.insersio}
                      </p>
                    </div>
                  </div>

                  {/* Inervasi & Vaskularisasi Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <div className="p-2.5 rounded-xl bg-amber-950/25 border border-amber-500/25">
                      <div className="flex items-center gap-1.5 text-amber-300 font-semibold mb-1 text-[10px]">
                        <Zap className="w-3 h-3 text-amber-400 shrink-0" />
                        <span>INERVASI SARAF</span>
                      </div>
                      <p className="text-[11px] leading-relaxed text-slate-300">
                        {medicalInfo.inervasi}
                      </p>
                    </div>

                    <div className="p-2.5 rounded-xl bg-rose-950/25 border border-rose-500/25">
                      <div className="flex items-center gap-1.5 text-rose-300 font-semibold mb-1 text-[10px]">
                        <Heart className="w-3 h-3 text-rose-400 shrink-0" />
                        <span>VASKULARISASI ARTERI</span>
                      </div>
                      <p className="text-[11px] leading-relaxed text-slate-300">
                        {medicalInfo.vaskularisasi}
                      </p>
                    </div>
                  </div>

                  {/* Korelasi Klinis */}
                  {medicalInfo.korelasiKlinis && (
                    <div className="p-2.5 rounded-xl bg-sky-950/30 border border-sky-500/30">
                      <div className="flex items-center gap-1.5 text-sky-300 font-semibold mb-1 text-[10px]">
                        <Stethoscope className="w-3 h-3 text-sky-400 shrink-0" />
                        <span>KORELASI KLINIS & IMPLIKASI MEDIS</span>
                      </div>
                      <p className="text-[11px] leading-relaxed text-slate-300">
                        {medicalInfo.korelasiKlinis}
                      </p>
                    </div>
                  )}
                </>
              )}

              {medicalInfo?.type === 'organ' && (
                <>
                  {/* Deskripsi Organ */}
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                    <p className="text-xs leading-relaxed text-slate-200">
                      {medicalInfo.deskripsi}
                    </p>
                  </div>

                  {/* Vaskularisasi: Arteri & Vena Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <div className="p-2.5 rounded-xl bg-rose-950/25 border border-rose-500/25">
                      <div className="flex items-center gap-1.5 text-rose-300 font-semibold mb-1 text-[10px]">
                        <Heart className="w-3 h-3 text-rose-400 shrink-0" />
                        <span>VASKULARISASI ARTERI</span>
                      </div>
                      <p className="text-[11px] leading-relaxed text-slate-300">
                        {medicalInfo.arteri}
                      </p>
                    </div>

                    <div className="p-2.5 rounded-xl bg-blue-950/25 border border-blue-500/25">
                      <div className="flex items-center gap-1.5 text-blue-300 font-semibold mb-1 text-[10px]">
                        <Droplets className="w-3 h-3 text-blue-400 shrink-0" />
                        <span>DRAINASE VENA</span>
                      </div>
                      <p className="text-[11px] leading-relaxed text-slate-300">
                        {medicalInfo.vena}
                      </p>
                    </div>
                  </div>

                  {/* Inervasi Saraf Otonom */}
                  <div className="p-2.5 rounded-xl bg-amber-950/25 border border-amber-500/25">
                    <div className="flex items-center gap-1.5 text-amber-300 font-semibold mb-1 text-[10px]">
                      <Zap className="w-3 h-3 text-amber-400 shrink-0" />
                      <span>INERVASI SARAF (SIMPATIS & PARASIMPATIS)</span>
                    </div>
                    <p className="text-[11px] leading-relaxed text-slate-300">
                      {medicalInfo.inervasi}
                    </p>
                  </div>

                  {/* Limfatik */}
                  {medicalInfo.limfatik && (
                    <div className="p-2.5 rounded-xl bg-emerald-950/25 border border-emerald-500/25">
                      <div className="flex items-center gap-1.5 text-emerald-300 font-semibold mb-1 text-[10px]">
                        <ShieldCheck className="w-3 h-3 text-emerald-400 shrink-0" />
                        <span>DRAINASE GETAH BENING (LIMFATIK)</span>
                      </div>
                      <p className="text-[11px] leading-relaxed text-slate-300">
                        {medicalInfo.limfatik}
                      </p>
                    </div>
                  )}

                  {/* Korelasi Klinis */}
                  {medicalInfo.korelasiKlinis && (
                    <div className="p-2.5 rounded-xl bg-purple-950/30 border border-purple-500/30">
                      <div className="flex items-center gap-1.5 text-purple-300 font-semibold mb-1 text-[10px]">
                        <Stethoscope className="w-3 h-3 text-purple-400 shrink-0" />
                        <span>KORELASI KLINIS & PATOLOGI</span>
                      </div>
                      <p className="text-[11px] leading-relaxed text-slate-300">
                        {medicalInfo.korelasiKlinis}
                      </p>
                    </div>
                  )}
                </>
              )}

              {medicalInfo?.type === 'bone' && (
                <>
                  {/* Deskripsi Tulang */}
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                    <p className="text-xs leading-relaxed text-slate-200">
                      {medicalInfo.deskripsi}
                    </p>
                  </div>

                  {/* Artikulasi Persendian */}
                  <div className="p-2.5 rounded-xl bg-cyan-950/25 border border-cyan-500/25">
                    <div className="flex items-center gap-1.5 text-cyan-300 font-semibold mb-1 text-[10px]">
                      <Bone className="w-3 h-3 text-cyan-400 shrink-0" />
                      <span>ARTIKULASI & HUBUNGAN PERSENDIAN</span>
                    </div>
                    <p className="text-[11px] leading-relaxed text-slate-300">
                      {medicalInfo.artikulasi}
                    </p>
                  </div>

                  {/* Landmark Osteologis */}
                  <div className="p-2.5 rounded-xl bg-amber-950/25 border border-amber-500/25">
                    <div className="flex items-center gap-1.5 text-amber-300 font-semibold mb-1 text-[10px]">
                      <MapPin className="w-3 h-3 text-amber-400 shrink-0" />
                      <span>LANDMARK ANATOMIS & PERLEKATAN</span>
                    </div>
                    <p className="text-[11px] leading-relaxed text-slate-300">
                      {medicalInfo.landmark}
                    </p>
                  </div>

                  {/* Korelasi Klinis */}
                  {medicalInfo.korelasiKlinis && (
                    <div className="p-2.5 rounded-xl bg-rose-950/30 border border-rose-500/30">
                      <div className="flex items-center gap-1.5 text-rose-300 font-semibold mb-1 text-[10px]">
                        <Stethoscope className="w-3 h-3 text-rose-400 shrink-0" />
                        <span>KORELASI KLINIS & FRAKTUR</span>
                      </div>
                      <p className="text-[11px] leading-relaxed text-slate-300">
                        {medicalInfo.korelasiKlinis}
                      </p>
                    </div>
                  )}
                </>
              )}

              {/* Fallback if no medicalInfo */}
              {!medicalInfo && (
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {chosenConcept
                    ? getExplanation(chosenConcept.name, activeSelectedPart.system)
                    : activeSystemDef?.description}
                </p>
              )}
            </div>

            {/* FMA Metadata & Element Count */}
            <div className="grid grid-cols-2 gap-2 p-2 bg-white/5 rounded-xl border border-white/10 text-xs mb-3 shrink-0">
              <div>
                <span className="text-[9px] text-slate-500 block uppercase tracking-wider">Identifikasi FMA</span>
                <span className="font-mono text-sky-300 font-semibold text-[11px]">{chosenConcept?.id || 'FMA'}</span>
              </div>
              <div>
                <span className="text-[9px] text-slate-500 block uppercase tracking-wider">Komponen 3D</span>
                <span className="text-white font-semibold text-[11px]">{state.selected.length} elemen mesh</span>
              </div>
            </div>

            {/* Controls */}
            <div className="flex gap-2 shrink-0">
              <Button
                className={`flex-1 text-xs h-9 font-semibold gap-2 ${
                  state.isolate
                    ? 'bg-amber-500 hover:bg-amber-600 text-black'
                    : 'bg-sky-500 hover:bg-sky-600 text-white shadow-[0_0_15px_rgba(56,189,248,0.3)]'
                }`}
                onClick={() => setState(s => ({ ...s, isolate: !s.isolate, explode: 0 }))}
              >
                <Focus className="w-3.5 h-3.5" />
                {state.isolate ? 'Kembalikan Tubuh' : 'Isolasi Struktur Ini'}
              </Button>
              <Button
                variant="outline"
                className="text-xs h-9 border-white/15 text-slate-300 hover:text-white"
                onClick={() => {
                  setState(s => ({ ...s, selected: [], isolate: false }));
                  setDetailsOpen(false);
                }}
              >
                Lepas
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Loading Screen Overlay */}
      {progress < 100 && !error && (
        <div className="absolute inset-0 bg-[#050511]/90 backdrop-blur-md z-50 flex flex-col items-center justify-center p-6">
          <div className="w-16 h-16 relative mb-4">
            <motion.div
              className="absolute inset-0 border-4 border-sky-500/20 border-t-sky-400 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
            />
          </div>
          <h2 className="text-lg font-bold text-white mb-1">Menyiapkan Model Anatomi 3D</h2>
          <p className="text-xs text-slate-400 mb-4">
            Mengunduh dan merakit {atlas?.parts.length.toLocaleString() ?? '2.234'} struktur organ ({progress}%)
          </p>
          <div className="w-64 h-1.5 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-sky-500 to-teal-400"
              style={{ width: `${progress}%` }}
              transition={{ ease: 'easeOut', duration: 0.3 }}
            />
          </div>
        </div>
      )}

      {/* Error state */}
      {error && (
        <div className="absolute inset-0 bg-[#050511]/95 z-50 flex flex-col items-center justify-center p-6 text-center">
          <p className="text-rose-400 text-sm mb-4">{error}</p>
          <Button variant="outline" onClick={() => window.location.reload()} className="text-xs">
            Muat Ulang Halaman
          </Button>
        </div>
      )}
    </div>
  );
}
