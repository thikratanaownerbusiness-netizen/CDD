export function Services() {
  return (
    <div className="pt-32 pb-20 content-width min-h-screen">
      <h1 className="text-5xl font-display font-bold text-slate-900 mb-8 italic">Academic Services</h1>
      <p className="text-lg text-slate-600 max-w-3xl leading-relaxed mb-12">
        From curriculum review to full digital transformation, our professional services help institutions meet the demands of 21st-century education.
      </p>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="p-8 bg-white border border-slate-100 rounded-2xl shadow-sm">
          <h2 className="text-2xl font-bold mb-4">Institutional Consulting</h2>
          <p className="text-slate-500">We work with university leadership to align academic programs with strategic goals and market demands.</p>
        </div>
        <div className="p-8 bg-white border border-slate-100 rounded-2xl shadow-sm">
          <h2 className="text-2xl font-bold mb-4">Framework Development</h2>
          <p className="text-slate-500">Our experts design customized competency frameworks that meet international accreditation standards.</p>
        </div>
      </div>
    </div>
  );
}
