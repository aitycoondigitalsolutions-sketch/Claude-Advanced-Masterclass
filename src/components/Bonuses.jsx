import React from 'react';
import { Gift, FolderGit2, FileText, Video, MessagesSquare, Check } from 'lucide-react';
import { BONUSES_DATA } from '../data/masterclassData';

export default function Bonuses() {
  const getIcon = (name) => {
    switch (name) {
      case 'FolderGit2':
        return <FolderGit2 className="w-6 h-6" />;
      case 'FileText':
        return <FileText className="w-6 h-6" />;
      case 'Video':
        return <Video className="w-6 h-6" />;
      case 'MessagesSquare':
        return <MessagesSquare className="w-6 h-6" />;
      default:
        return <Gift className="w-6 h-6" />;
    }
  };

  const getThemeClasses = (idx) => {
    switch (idx) {
      case 0:
        return {
          iconBg: 'bg-purple-500/20 text-purple-300',
          badgeText: 'text-purple-400'
        };
      case 1:
        return {
          iconBg: 'bg-cyan-500/20 text-cyan-400',
          badgeText: 'text-cyan-400'
        };
      case 2:
        return {
          iconBg: 'bg-emerald-500/20 text-emerald-400',
          badgeText: 'text-emerald-400'
        };
      case 3:
      default:
        return {
          iconBg: 'bg-amber-500/20 text-amber-400',
          badgeText: 'text-amber-400'
        };
    }
  };

  return (
    <section id="bonuses" className="py-20 bg-[#0f111a]/50 border-t border-[#23283b]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-300 border border-amber-500/30 mb-3">
            <Gift className="w-3.5 h-3.5" /> INCLUDED FREE WITH REGISTRATION
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Exclusive Masterclass Bonus Vault
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Over $997 worth of architecture blueprints, production starter repositories, prompt vaults, and private community access included with your seat.
          </p>
        </div>

        {/* Bonus Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BONUSES_DATA.map((bonus, idx) => {
            const { iconBg, badgeText } = getThemeClasses(idx);
            return (
              <div
                key={idx}
                className="glass-card glass-card-hover rounded-2xl p-6 border border-[#23283b] flex flex-col justify-between"
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl ${iconBg} flex items-center justify-center mb-5`}>
                    {getIcon(bonus.iconName)}
                  </div>
                  <span className={`text-xs font-mono ${badgeText} font-semibold uppercase`}>
                    Bonus #{idx + 1} • {bonus.value}
                  </span>
                  <h3 className="text-lg font-bold text-white mt-1 mb-2">
                    {bonus.title}
                  </h3>
                  <p className="text-sm text-slate-400">
                    {bonus.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#23283b] flex items-center text-xs text-emerald-400 font-medium">
                  <Check className="w-4 h-4 mr-1 shrink-0" />
                  <span>{bonus.benefit}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
