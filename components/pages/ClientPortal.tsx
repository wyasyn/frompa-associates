import { FileText, Globe, Lock, Users } from "lucide-react";

export function ClientPortal() {
  return (
    <section className="relative w-full py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 via-white to-blue-50/30 dark:from-slate-900/50 dark:via-slate-800 dark:to-slate-900/80" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-100/20 to-cyan-100/20 dark:from-blue-900/10 dark:to-cyan-900/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />

      <div className="relative container px-4 md:px-6 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50/50 dark:bg-blue-900/20 border border-blue-200/50 dark:border-blue-800/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-6">
            <Lock className="w-4 h-4 mr-2" />
            Secure Access
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 dark:from-white dark:via-slate-200 dark:to-slate-300 bg-clip-text text-transparent mb-6">
            Client Portal
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-slate-600 dark:text-slate-300 leading-relaxed">
            Your secure gateway to engagement documents, project tracking, and
            seamless communication with your dedicated team.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {[
            {
              icon: FileText,
              title: "Document Access",
              description:
                "Access all your engagement documents and reports in one secure location.",
              gradient: "from-blue-500 to-cyan-500",
            },
            {
              icon: Users,
              title: "Team Communication",
              description:
                "Communicate directly with your engagement team through secure messaging.",
              gradient: "from-emerald-500 to-teal-500",
            },
            {
              icon: Globe,
              title: "Project Tracking",
              description:
                "Monitor project progress and milestones in real-time.",
              gradient: "from-purple-500 to-pink-500",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 dark:border-slate-700/30 shadow-xl"
            >
              <div className="flex flex-col items-center text-center">
                <div
                  className={`p-4 rounded-xl bg-gradient-to-br ${feature.gradient} shadow-lg mb-4`}
                >
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Coming Soon CTA */}
        <div className="text-center">
          <div className="inline-flex flex-col items-center gap-6 p-8 bg-gradient-to-r from-blue-50/80 to-cyan-50/80 dark:from-slate-800/50 dark:to-slate-700/50 backdrop-blur-sm rounded-2xl border border-blue-200/30 dark:border-slate-600/30">
            <div className="text-slate-700 dark:text-slate-300 text-center">
              <h3 className="text-2xl font-bold mb-2">Portal Coming Soon</h3>
              <p className="text-lg mb-4">
                Secure login and comprehensive dashboard experience
              </p>
            </div>
            <div className="flex items-center space-x-2 text-blue-600 dark:text-blue-400">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
              </span>
              <span className="font-medium">In Development</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
