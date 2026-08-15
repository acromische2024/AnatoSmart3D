import { prisma } from '@/lib/prisma';
import { notFound } from 'next/navigation';
import { BackgroundOrbs } from '@/components/anatomy/BackgroundOrbs';
import { ChevronLeft, Mail, MapPin, Calendar, Heart, Quote, BookOpen, GraduationCap, Building2, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default async function ProfilePage({ params }: { params: { slug: string } }) {
  const profile = await prisma.profile.findUnique({
    where: { slug: params.slug },
  });

  if (!profile) {
    notFound();
  }

  const isDosen = profile.type === 'DOSEN';
  const isAslab = profile.type === 'ASLAB';

  return (
    <div className="min-h-screen bg-[#050511] text-white font-sans overflow-x-hidden selection:bg-sky-500/30">
      
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-600/20 blur-[150px] rounded-full" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-purple-600/20 blur-[150px] rounded-full" />
      </div>

      <BackgroundOrbs />

      <header className="relative z-50 pt-6 px-4 sm:px-6 max-w-5xl mx-auto">
        <Link href="/tentang">
          <Button variant="ghost" className="text-slate-400 hover:text-white hover:bg-white/10 group">
            <ChevronLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Kembali ke Struktur Organisasi
          </Button>
        </Link>
      </header>

      <main className="relative z-10 max-w-5xl mx-auto p-4 sm:p-6 py-10 pb-24">
        
        {/* Profile Header */}
        <div className="flex flex-col md:flex-row gap-8 items-start mb-12">
          <div className="w-48 h-48 md:w-64 md:h-64 shrink-0 rounded-3xl overflow-hidden bg-slate-800 border-4 border-white/5 shadow-2xl relative">
            {profile.image ? (
              <img src={profile.image} alt={profile.name} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-7xl font-bold text-slate-500">
                {profile.name.charAt(0)}
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>

          <div className="flex-1">
            <div className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs font-bold text-slate-300 uppercase tracking-widest mb-4">
              {profile.type} {profile.groupOrYear && `• ${profile.groupOrYear}`}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-2 tracking-tight">{profile.name}</h1>
            <p className="text-xl md:text-2xl text-sky-400 font-medium mb-6">{profile.role}</p>

            {/* Quick Info Badges */}
            <div className="flex flex-wrap gap-4 text-sm text-slate-300">
              {profile.email && (
                <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-xl">
                  <Mail className="w-4 h-4 text-slate-400" />
                  {profile.email}
                </div>
              )}
              {profile.origin && (
                <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-xl">
                  <MapPin className="w-4 h-4 text-slate-400" />
                  {profile.origin}
                </div>
              )}
              {profile.birthDate && (
                <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-xl">
                  <Calendar className="w-4 h-4 text-slate-400" />
                  {profile.birthDate}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Detailed Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Main Content Column */}
          <div className="md:col-span-2 space-y-8">
            {profile.quotes && (
              <div className="bg-gradient-to-br from-purple-500/10 to-indigo-500/10 border border-purple-500/20 p-8 rounded-3xl relative overflow-hidden">
                <Quote className="absolute top-6 right-6 w-24 h-24 text-purple-500/10" />
                <h3 className="text-purple-300 font-bold uppercase tracking-wider text-xs mb-2">Quote of the day</h3>
                <p className="text-xl md:text-2xl font-serif italic text-white/90 relative z-10">"{profile.quotes}"</p>
              </div>
            )}

            {profile.description && (
              <section className="bg-white/5 border border-white/5 p-8 rounded-3xl">
                <h3 className="flex items-center gap-2 text-xl font-bold mb-4"><BookOpen className="w-5 h-5 text-sky-400"/> Biografi Singkat</h3>
                <p className="text-slate-300 leading-relaxed whitespace-pre-wrap">{profile.description}</p>
              </section>
            )}

            {(profile.organizations || profile.intellectualProp) && (
              <div className="grid grid-cols-1 gap-8">
                {profile.organizations && (
                  <section className="bg-white/5 border border-white/5 p-8 rounded-3xl">
                    <h3 className="flex items-center gap-2 text-xl font-bold mb-4"><Users className="w-5 h-5 text-emerald-400"/> Riwayat Organisasi</h3>
                    <ul className="space-y-3">
                      {profile.organizations.split('\n').filter(Boolean).map((org, i) => (
                        <li key={i} className="flex gap-3 text-slate-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"/>
                          {org}
                        </li>
                      ))}
                    </ul>
                  </section>
                )}

                {profile.intellectualProp && (
                  <section className="bg-white/5 border border-white/5 p-8 rounded-3xl">
                    <h3 className="flex items-center gap-2 text-xl font-bold mb-4"><Building2 className="w-5 h-5 text-amber-400"/> Hak Kekayaan Intelektual (HAKI)</h3>
                    <ul className="space-y-3">
                      {profile.intellectualProp.split('\n').filter(Boolean).map((haki, i) => (
                        <li key={i} className="flex gap-3 text-slate-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0"/>
                          {haki}
                        </li>
                      ))}
                    </ul>
                  </section>
                )}
              </div>
            )}
          </div>

          {/* Sidebar Column */}
          <div className="space-y-8">
            
            {/* Hobi & Favorit (For Aslab usually) */}
            {(profile.hobby || profile.favoriteBlock) && (
              <section className="bg-white/5 border border-white/5 p-6 rounded-3xl">
                <h3 className="flex items-center gap-2 font-bold mb-4 text-rose-400"><Heart className="w-4 h-4"/> Minat & Hobi</h3>
                {profile.favoriteBlock && (
                  <div className="mb-4">
                    <p className="text-xs text-slate-500 uppercase font-bold mb-1">Blok Favorit</p>
                    <p className="font-medium">{profile.favoriteBlock}</p>
                  </div>
                )}
                {profile.hobby && (
                  <div>
                    <p className="text-xs text-slate-500 uppercase font-bold mb-1">Hobi</p>
                    <p className="font-medium">{profile.hobby}</p>
                  </div>
                )}
              </section>
            )}

            {/* Educational History */}
            <section className="bg-white/5 border border-white/5 p-6 rounded-3xl">
              <h3 className="flex items-center gap-2 font-bold mb-6 text-sky-400"><GraduationCap className="w-4 h-4"/> Riwayat Pendidikan</h3>
              <div className="space-y-4 border-l-2 border-white/10 ml-2 pl-4 relative">
                {profile.eduSD && (
                  <div className="relative">
                    <div className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-sky-400" />
                    <p className="text-xs text-slate-400 mb-0.5">Sekolah Dasar</p>
                    <p className="font-medium text-sm">{profile.eduSD}</p>
                  </div>
                )}
                {profile.eduSMP && (
                  <div className="relative">
                    <div className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-sky-400" />
                    <p className="text-xs text-slate-400 mb-0.5">Sekolah Menengah Pertama</p>
                    <p className="font-medium text-sm">{profile.eduSMP}</p>
                  </div>
                )}
                {profile.eduSMA && (
                  <div className="relative">
                    <div className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-sky-400" />
                    <p className="text-xs text-slate-400 mb-0.5">Sekolah Menengah Atas</p>
                    <p className="font-medium text-sm">{profile.eduSMA}</p>
                  </div>
                )}
                {profile.eduS1 && (
                  <div className="relative">
                    <div className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-indigo-400" />
                    <p className="text-xs text-slate-400 mb-0.5">S1 (Sarjana)</p>
                    <p className="font-medium text-sm">{profile.eduS1}</p>
                  </div>
                )}
                {profile.eduS2 && (
                  <div className="relative">
                    <div className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-indigo-400" />
                    <p className="text-xs text-slate-400 mb-0.5">S2 (Magister)</p>
                    <p className="font-medium text-sm">{profile.eduS2}</p>
                  </div>
                )}
                {profile.eduS3 && (
                  <div className="relative">
                    <div className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-indigo-400" />
                    <p className="text-xs text-slate-400 mb-0.5">S3 (Doktoral)</p>
                    <p className="font-medium text-sm">{profile.eduS3}</p>
                  </div>
                )}
              </div>
            </section>

            {/* Links & Publications (For Dosen) */}
            {(profile.linkScopus || profile.linkSinta || profile.linkScholar || profile.linkResearch) && (
              <section className="bg-white/5 border border-white/5 p-6 rounded-3xl">
                <h3 className="flex items-center gap-2 font-bold mb-4 text-emerald-400"><BookOpen className="w-4 h-4"/> Portal Publikasi</h3>
                <div className="space-y-2.5">
                  {profile.linkScopus && (
                    <a href={profile.linkScopus} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors text-sm group">
                      <span className="font-semibold text-slate-300 group-hover:text-white">Scopus</span>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-emerald-400" />
                    </a>
                  )}
                  {profile.linkSinta && (
                    <a href={profile.linkSinta} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors text-sm group">
                      <span className="font-semibold text-slate-300 group-hover:text-white">Sinta</span>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-emerald-400" />
                    </a>
                  )}
                  {profile.linkScholar && (
                    <a href={profile.linkScholar} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors text-sm group">
                      <span className="font-semibold text-slate-300 group-hover:text-white">Google Scholar</span>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-emerald-400" />
                    </a>
                  )}
                  {profile.linkResearch && (
                    <a href={profile.linkResearch} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors text-sm group">
                      <span className="font-semibold text-slate-300 group-hover:text-white">Link Lainnya</span>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-emerald-400" />
                    </a>
                  )}
                </div>
              </section>
            )}

            {/* Address */}
            {profile.address && (
              <section className="bg-white/5 border border-white/5 p-6 rounded-3xl">
                <h3 className="flex items-center gap-2 font-bold mb-4 text-slate-300"><MapPin className="w-4 h-4"/> Alamat Institusi</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{profile.address}</p>
              </section>
            )}

          </div>
        </div>
      </main>
    </div>
  );
}
