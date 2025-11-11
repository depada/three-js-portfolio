import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import Developer from '../components/Developer.jsx';
import CanvasLoader from '../components/Loading.jsx';
import { workExperiences } from '../constants/index.js';

const WorkExperience = () => {
  const [animationName, setAnimationName] = useState('idle');
  const [expandedId, setExpandedId] = useState(null);

  const renderBody = (item) => {
    const hasHighlights = Array.isArray(item.highlights) && item.highlights.length > 0;

    if (!hasHighlights) {
      return (
        <p className="group-hover:text-white transition-colors duration-300 text-zinc-300 leading-7">{item.title}</p>
      );
    }

    const isExpanded = expandedId === item.id;
    const points = isExpanded ? item.highlights : item.highlights.slice(0, 4);

    return (
      <>
        <ul className="ml-4 list-disc space-y-1.5 text-sm leading-6 text-zinc-300 group-hover:text-white">
          {points.map((hl, i) => (
            <li key={i}>{hl}</li>
          ))}
        </ul>

        {item.highlights.length > 4 && (
          <button
            onClick={() => setExpandedId(isExpanded ? null : item.id)}
            className="mt-3 inline-flex items-center text-xs font-medium text-indigo-500 hover:text-indigo-400
                       transition-colors"
            aria-expanded={isExpanded}>
            {isExpanded ? 'Show less' : 'Show more'}
          </button>
        )}
      </>
    );
  };

  return (
    <section className="c-space my-20" id="work">
      <div className="w-full text-white-600">
        <p className="head-text">My Work Experience</p>

        <div className="work-container">
          {/* 3D Pane */}
          <div className="work-canvas">
            <Canvas>
              <ambientLight intensity={7} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
              <directionalLight position={[10, 10, 10]} intensity={1} />
              <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />

              <Suspense fallback={<CanvasLoader />}>
                <Developer position-y={-3} scale={3} animationName={animationName} />
              </Suspense>
            </Canvas>
          </div>

          {/* Timeline Pane */}
          <div className="work-content">
            <div className="sm:py-10 py-5 sm:px-5 px-2.5">
              {workExperiences.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setAnimationName(item.animation.toLowerCase())}
                  onPointerOver={() => setAnimationName(item.animation.toLowerCase())}
                  onPointerOut={() => setAnimationName('idle')}
                  className="work-content_container group">
                  <div className="flex flex-col h-full justify-start items-center py-2">
                    <div className="work-content_logo">
                      <img className="w-full h-full" src={item.icon} alt={`${item.name} logo`} />
                    </div>
                    <div className="work-content_bar" />
                  </div>

                  <div className="sm:p-5 px-2.5 py-5">
                    <div className="flex items-baseline justify-between gap-3 flex-wrap">
                      <p className="font-bold text-white-800">{item.name}</p>
                      <p className="text-xs text-zinc-400">{item.duration}</p>
                    </div>
                    <p className="text-sm mb-3 text-zinc-200">{item.pos}</p>

                    {renderBody(item)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
