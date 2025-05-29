import { Award, BookOpen, FileText } from "lucide-react";

export function Insights() {
  return (
    <section className="relative w-full py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 via-white to-purple-50/30 dark:from-slate-900/50 dark:via-slate-800 dark:to-slate-900/80" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-100/20 to-pink-100/20 dark:from-purple-900/10 dark:to-pink-900/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />

      <div className="relative container px-4 md:px-6 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-50/50 dark:bg-purple-900/20 border border-purple-200/50 dark:border-purple-800/30 text-purple-700 dark:text-purple-300 text-sm font-medium mb-6">
            <BookOpen className="w-4 h-4 mr-2" />
            Expert Knowledge
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 dark:from-white dark:via-slate-200 dark:to-slate-300 bg-clip-text text-transparent mb-6">
            Insights & Expertise
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-slate-600 dark:text-slate-300 leading-relaxed">
            Discover thought leadership, industry insights, and expert analysis
            from our experienced team of professionals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-2xl p-8 border border-white/20 dark:border-slate-700/30 shadow-xl">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 p-3 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg">
                <FileText className="h-6 w-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                  Industry Updates
                </h2>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Stay informed about the latest audit practices, regulatory
                  changes, and compliance requirements affecting your business.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-2xl p-8 border border-white/20 dark:border-slate-700/30 shadow-xl">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 p-3 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg">
                <Award className="h-6 w-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                  Expert Analysis
                </h2>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Access in-depth analysis on tax changes, business advisory
                  trends, and strategic financial insights from our senior
                  partners.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Coming Soon CTA */}
        <div className="text-center">
          <div className="inline-flex flex-col items-center gap-4 p-8 bg-gradient-to-r from-purple-50/80 to-pink-50/80 dark:from-slate-800/50 dark:to-slate-700/50 backdrop-blur-sm rounded-2xl border border-purple-200/30 dark:border-slate-600/30">
            <div className="text-slate-700 dark:text-slate-300 text-center">
              <h3 className="text-2xl font-bold mb-2">Coming Soon</h3>
              <p className="text-lg">
                Our comprehensive blog and expert insights platform
              </p>
            </div>
            <div className="flex items-center space-x-2 text-purple-600 dark:text-purple-400">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
              </span>
              <span className="font-medium">In Development</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
