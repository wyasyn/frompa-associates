import { CheckCircle, Lock, Shield } from "lucide-react";

export function PrivacyPolicy() {
  return (
    <section className="relative w-full py-16 md:py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 via-white to-emerald-50/30 dark:from-slate-900/50 dark:via-slate-800 dark:to-slate-900/80" />
      <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-emerald-100/20 to-blue-100/20 dark:from-emerald-900/10 dark:to-blue-900/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />

      <div className="relative container px-4 md:px-6 max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-50/50 dark:bg-emerald-900/20 border border-emerald-200/50 dark:border-emerald-800/30 text-emerald-700 dark:text-emerald-300 text-sm font-medium mb-6">
            <Shield className="w-4 h-4 mr-2" />
            Your Privacy Matters
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 dark:from-white dark:via-slate-200 dark:to-slate-300 bg-clip-text text-transparent mb-6">
            Privacy Policy
          </h1>
        </div>

        {/* Content Cards */}
        <div className="space-y-6">
          <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-2xl p-8 border border-white/20 dark:border-slate-700/30 shadow-xl">
            <div className="flex items-start space-x-4 mb-6">
              <div className="flex-shrink-0 p-3 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 shadow-lg">
                <Lock className="h-6 w-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                  Data Protection & Security
                </h2>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
                  FROMPA & ASSOCIATES values your privacy above all else. We
                  collect and use personal information solely for providing our
                  professional services with the highest standards of
                  confidentiality and security.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-2xl p-8 border border-white/20 dark:border-slate-700/30 shadow-xl">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 p-3 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 shadow-lg">
                <CheckCircle className="h-6 w-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                  Your Rights & Consent
                </h2>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
                  Your information is kept secure and shared only when necessary
                  with your explicit consent or legal obligation. We do not sell
                  or rent user information under any circumstances. By using our
                  site, you consent to the practices outlined in this policy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
