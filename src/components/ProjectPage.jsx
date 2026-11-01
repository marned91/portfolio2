import { useState } from 'react';
import Toast from './Toast';
import CopyLinkButton from './CopyLinkButton';
import ImageGallery from './ImageGallery';
import { FaGithub, FaArrowUpRightFromSquare } from 'react-icons/fa6';

export default function ProjectPage({
  title,
  githubLink,
  liveLink,
  projectHash,
  images,
  overview,
  features,
  technologies,
}) {
  const [copied, setCopied] = useState(false);

  return (
    <section className="min-h-[70vh] bg-[#f3f5f0] px-4 py-8 md:px-8 md:py-14">
      <div className="mx-auto max-w-7xl">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[.14em] text-[#668077]">Noroff · Study project</p>
        <div className="grid items-start gap-8 rounded-3xl border border-[#dce4dd] bg-[#fbfcf8] p-4 shadow-[0_20px_60px_rgba(35,60,54,.08)] md:p-8 lg:grid-cols-[1.05fr_.95fr] lg:gap-10">
          <div className="min-w-0">
            <ImageGallery images={images} mainHeight={520} thumbHeight={76} thumbHeightSm={64} thumbHeightXs={52} />
          </div>
          <div className="flex min-w-0 flex-col">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h1 className="m-0 font-large text-3xl font-semibold tracking-tight text-[#203c34] md:text-4xl">{title}</h1>
              <div className="flex items-center gap-2">
                <a href={githubLink} target="_blank" rel="noreferrer" aria-label="View project on GitHub" className="grid h-10 w-10 place-items-center rounded-full border border-[#dce4dd] text-[#355e51] transition hover:bg-[#edf3ee] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#578bcf]"><FaGithub aria-hidden="true" /></a>
                <CopyLinkButton projectHash={projectHash} onCopy={() => setCopied(true)} />
              </div>
            </div>
            <a href={liveLink} target="_blank" rel="noreferrer" className="mt-3 inline-flex w-fit items-center gap-2 text-sm font-medium text-[#53796a] no-underline hover:text-[#203c34]">
              Open live project <FaArrowUpRightFromSquare aria-hidden="true" />
            </a>
            <Toast message="Link copied!" show={copied} onClose={() => setCopied(false)} />
            <div className="my-6 h-px bg-[#dce4dd]" />
            <div className="space-y-6">
              <section aria-labelledby="overview-heading">
                <h2 id="overview-heading" className="mb-2 font-buttons-nav text-base font-semibold text-[#203c34]">Overview</h2>
                <p className="m-0 text-sm leading-7 text-[#5b6f66]">{overview}</p>
              </section>
              <section aria-labelledby="features-heading">
                <h2 id="features-heading" className="mb-2 font-buttons-nav text-base font-semibold text-[#203c34]">Features</h2>
                <ul className="m-0 list-disc space-y-2 pl-5 text-sm leading-6 text-[#5b6f66]">
                  {features.map((feature) => <li key={feature}>{feature}</li>)}
                </ul>
              </section>
              <section aria-labelledby="technologies-heading">
                <h2 id="technologies-heading" className="mb-3 font-buttons-nav text-base font-semibold text-[#203c34]">Technologies</h2>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((technology) => <span key={technology} className="rounded-full border border-[#d9e3dc] bg-[#f1f6f1] px-3 py-1.5 text-xs text-[#416457]">{technology}</span>)}
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
