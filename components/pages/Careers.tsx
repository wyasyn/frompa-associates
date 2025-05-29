import { Briefcase, Users, Award, Globe, Mail } from "lucide-react";

export default function Careers() {
  return (
    <section className="relative w-full py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 via-white to-purple-50/30 dark:from-slate-900/50 dark:via-slate-800 dark:to-slate-900/80" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-100/20 to-pink-100/20 dark:from-purple-900/10 dark:to-pink-900/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />

      <div className="relative container px-4 md:px-6 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-50/50 dark:bg-purple-900/20 border border-purple-200/50 dark:border-purple-800/30 text-purple-700 dark:text-purple-300 text-sm font-medium mb-6">
            <Briefcase className="w-4 h-4 mr-2" />
            Join Our Team
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 dark:from-white dark:via-slate-200 dark:to-slate-300 bg-clip-text text-transparent mb-6">
            Careers at{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              FROMPA & ASSOCIATES
            </span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-slate-600 dark:text-slate-300 leading-relaxed">
            Join a growing team of professionals committed to delivering
            exceptional service and integrity in the accounting and consulting
            industry.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {[
            {
              icon: Users,
              title: "Career Development",
              description:
                "Comprehensive mentorship programs and continuous learning opportunities to advance your professional growth.",
              gradient: "from-purple-500 to-pink-500",
            },
            {
              icon: Award,
              title: "Meaningful Impact",
              description:
                "Work on challenging projects that make a real difference for our clients and the broader business community.",
              gradient: "from-blue-500 to-cyan-500",
            },
            {
              icon: Globe,
              title: "Professional Excellence",
              description:
                "Join a culture of integrity, innovation, and excellence that sets the standard in our industry.",
              gradient: "from-emerald-500 to-teal-500",
            },
            {
              icon: Briefcase,
              title: "Growth Opportunities",
              description:
                "Diverse career paths and advancement opportunities across audit, tax, advisory, and consulting services.",
              gradient: "from-orange-500 to-red-500",
            },
          ].map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-2xl p-8 border border-white/20 dark:border-slate-700/30 shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div
                    className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center shadow-lg`}
                  >
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact Section */}
        <div className="text-center bg-gradient-to-r from-purple-600/10 to-pink-600/10 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl p-8 border border-purple-200/30 dark:border-purple-800/30">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            Ready to Join Our Team?
          </h3>
          <p className="text-slate-600 dark:text-slate-300 mb-6 max-w-2xl mx-auto">
            Explore available roles and submit your resume to
            careers@frompaandassociates.com. We're always looking for talented
            professionals to join our growing team.
          </p>
          <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <Mail className="w-5 h-5 mr-2" />
            careers@frompaandassociates.com
          </button>
        </div>
      </div>
    </section>
  );
}
