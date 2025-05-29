import { Cookie, Globe, Shield } from "lucide-react";

export function CookiePolicy() {
  return (
    <section className="relative w-full py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 via-white to-orange-50/30 dark:from-slate-900/50 dark:via-slate-800 dark:to-slate-900/80" />
      <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-orange-100/20 to-yellow-100/20 dark:from-orange-900/10 dark:to-yellow-900/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />

      <div className="relative container px-4 md:px-6 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-50/50 dark:bg-orange-900/20 border border-orange-200/50 dark:border-orange-800/30 text-orange-700 dark:text-orange-300 text-sm font-medium mb-6">
            <Cookie className="w-4 h-4 mr-2" />
            Website Experience
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 dark:from-white dark:via-slate-200 dark:to-slate-300 bg-clip-text text-transparent mb-6">
            Cookie Policy
          </h1>
        </div>

        <div className="space-y-6">
          <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-2xl p-8 border border-white/20 dark:border-slate-700/30 shadow-xl">
            <div className="flex items-start space-x-4 mb-6">
              <div className="flex-shrink-0 p-3 rounded-lg bg-gradient-to-br from-orange-500 to-red-500 shadow-lg">
                <Globe className="h-6 w-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                  Enhanced Browsing Experience
                </h2>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
                  Our website uses cookies to enhance your browsing experience,
                  analyze site traffic, and provide personalized content. These
                  technologies help us understand how you interact with our
                  services and improve your overall experience.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-2xl p-8 border border-white/20 dark:border-slate-700/30 shadow-xl">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 p-3 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 shadow-lg">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                  Your Control & Choices
                </h2>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
                  You have full control over cookies and can manage them through
                  your browser settings. By using our site, you consent to the
                  use of cookies in accordance with this policy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
