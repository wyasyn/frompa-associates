import { Award, FileText, Globe } from "lucide-react";

export function TermsOfService() {
  return (
    <section className="relative w-full py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 via-white to-blue-50/30 dark:from-slate-900/50 dark:via-slate-800 dark:to-slate-900/80" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-blue-100/20 to-purple-100/20 dark:from-blue-900/10 dark:to-purple-900/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />

      <div className="relative container px-4 md:px-6 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50/50 dark:bg-blue-900/20 border border-blue-200/50 dark:border-blue-800/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-6">
            <FileText className="w-4 h-4 mr-2" />
            Legal Framework
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 dark:from-white dark:via-slate-200 dark:to-slate-300 bg-clip-text text-transparent mb-6">
            Terms of Service
          </h1>
        </div>

        <div className="space-y-6">
          <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-2xl p-8 border border-white/20 dark:border-slate-700/30 shadow-xl">
            <div className="flex items-start space-x-4 mb-6">
              <div className="flex-shrink-0 p-3 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg">
                <Award className="h-6 w-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                  Professional Standards
                </h2>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
                  Use of this website and our services constitutes your
                  agreement to our terms. FROMPA & ASSOCIATES provides services
                  under the highest professional and ethical standards, ensuring
                  quality and reliability in every engagement.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-2xl p-8 border border-white/20 dark:border-slate-700/30 shadow-xl">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 p-3 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg">
                <Globe className="h-6 w-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                  Usage & Updates
                </h2>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
                  Users must use the site for lawful purposes only. We reserve
                  the right to update our Terms of Service as needed to reflect
                  changes in our practices. Continued use of the site implies
                  acceptance of any changes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
