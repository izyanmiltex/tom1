import React, { useState } from 'react';
import { ArrowRight, BookOpen, X } from 'lucide-react';
import { EDITORIAL_ARTICLES } from '../data/ralphLaurenData';
import { EditorialStory } from '../types';

export const RLStoriesSection: React.FC = () => {
  const [selectedStory, setSelectedStory] = useState<EditorialStory | null>(null);

  return (
    <section className="py-20 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-[#1E5631] font-semibold block mb-2">
              RL Magazine & Stories
            </span>
            <h2 className="font-serif-brand text-2xl sm:text-4xl text-black tracking-wide">
              The Heritage of Craft & Culture
            </h2>
          </div>
          <p className="text-xs text-gray-500 uppercase tracking-widest mt-2 md:mt-0 font-medium">
            Vol. 58 • Spring Chronicle
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {EDITORIAL_ARTICLES.map((story) => (
            <article
              key={story.id}
              onClick={() => setSelectedStory(story)}
              className="group cursor-pointer flex flex-col justify-between bg-[#faf9f8] border border-gray-200 hover:border-[#1E5631] transition-all duration-300"
            >
              <div className="aspect-[16/10] overflow-hidden bg-gray-100 relative">
                <img
                  referrerPolicy="no-referrer"
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <span className="absolute bottom-3 left-3 bg-[#1E5631] text-white text-[9px] uppercase tracking-widest px-2.5 py-1 font-semibold">
                  {story.category}
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-[11px] text-gray-400 mb-2">
                    <span>{story.author}</span>
                    <span>{story.readTime}</span>
                  </div>
                  <h3 className="font-serif-brand text-lg text-black font-medium leading-snug group-hover:text-[#1E5631] group-hover:underline mb-2">
                    {story.title}
                  </h3>
                  <p className="text-xs text-gray-600 font-light leading-relaxed line-clamp-3">
                    {story.excerpt}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-gray-200 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-[#1E5631]">
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Story Reader Modal */}
      {selectedStory && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
          <div
            className="bg-white max-w-2xl w-full shadow-2xl border border-gray-200 max-h-[88vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedStory(null)}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-black bg-white/80 rounded-full z-10"
              aria-label="Close story"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="aspect-[16/9] w-full overflow-hidden bg-gray-100">
              <img
                referrerPolicy="no-referrer"
                src={selectedStory.image}
                alt={selectedStory.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6 sm:10 space-y-4">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#1E5631] font-semibold block">
                {selectedStory.category} • {selectedStory.readTime}
              </span>
              <h2 className="font-serif-brand text-2xl sm:text-3xl text-black leading-snug">
                {selectedStory.title}
              </h2>
              <div className="text-xs text-gray-400 italic">
                By {selectedStory.author}
              </div>

              <div className="pt-4 border-t border-gray-100 text-sm leading-relaxed text-gray-700 font-light space-y-4">
                <p className="text-base text-gray-900 font-serif-brand italic">
                  "{selectedStory.excerpt}"
                </p>
                <p>{selectedStory.content}</p>
                <p>
                  "Style is very personal. It has nothing to do with fashion. Fashion is over quickly. Style is forever." — Ralph Lauren
                </p>
              </div>

              <div className="pt-6 border-t border-gray-200 flex justify-end">
                <button
                  onClick={() => setSelectedStory(null)}
                  className="px-6 py-2 bg-[#1E5631] hover:bg-[#184728] text-white text-xs uppercase tracking-wider font-medium"
                >
                  Close Story
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
