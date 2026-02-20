import { Geist } from "next/font/google";
import { Tag, AudioWaveIcon } from "@/stories/Tag";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className={`${geistSans.variable} showcase-page`}>
      <main className="showcase-main">
        <header className="showcase-header">
          <h1 className="showcase-title">Tag Component</h1>
          <p className="showcase-description">
            A compact tag for labeling content with optional icon, metadata, and chevron.
          </p>
        </header>

        <section className="showcase-section">
          <h2 className="section-title">Variants</h2>
          <div className="tag-row">
            <div className="tag-demo">
              <span className="demo-label">Outline</span>
              <Tag
                label="Indoors"
                variant="outline"
                meta="0:06 - 0:21"
                showChevron
                icon={<AudioWaveIcon />}
              />
            </div>
            <div className="tag-demo">
              <span className="demo-label">Solid</span>
              <Tag
                label="Indoors"
                variant="solid"
                meta="0:06 - 0:21"
                showChevron
                icon={<AudioWaveIcon />}
              />
            </div>
          </div>
        </section>

        <section className="showcase-section">
          <h2 className="section-title">Sizes</h2>
          <div className="tag-row tag-row--align-center">
            <div className="tag-demo">
              <span className="demo-label">Small</span>
              <Tag label="Indoors" variant="outline" size="sm" meta="0:06 - 0:21" showChevron icon={<AudioWaveIcon />} />
            </div>
            <div className="tag-demo">
              <span className="demo-label">Medium</span>
              <Tag label="Indoors" variant="outline" size="md" meta="0:06 - 0:21" showChevron icon={<AudioWaveIcon />} />
            </div>
            <div className="tag-demo">
              <span className="demo-label">Large</span>
              <Tag label="Indoors" variant="outline" size="lg" meta="0:06 - 0:21" showChevron icon={<AudioWaveIcon />} />
            </div>
          </div>
        </section>

        <section className="showcase-section">
          <h2 className="section-title">Content Options</h2>
          <div className="tag-row tag-row--wrap">
            <div className="tag-demo">
              <span className="demo-label">Label only</span>
              <Tag label="Nature" variant="outline" />
            </div>
            <div className="tag-demo">
              <span className="demo-label">With icon</span>
              <Tag label="Indoors" variant="outline" icon={<AudioWaveIcon />} />
            </div>
            <div className="tag-demo">
              <span className="demo-label">With meta</span>
              <Tag label="Indoors" variant="outline" meta="0:06 - 0:21" />
            </div>
            <div className="tag-demo">
              <span className="demo-label">Full</span>
              <Tag label="Indoors" variant="outline" meta="0:06 - 0:21" showChevron icon={<AudioWaveIcon />} />
            </div>
          </div>
        </section>

        <section className="showcase-section">
          <h2 className="section-title">Clickable</h2>
          <div className="tag-row">
            <div className="tag-demo">
              <span className="demo-label">Outline clickable</span>
              <Tag
                label="Indoors"
                variant="outline"
                meta="0:06 - 0:21"
                showChevron
                icon={<AudioWaveIcon />}
                onClick={() => alert('Tag clicked!')}
              />
            </div>
            <div className="tag-demo">
              <span className="demo-label">Solid clickable</span>
              <Tag
                label="Indoors"
                variant="solid"
                meta="0:06 - 0:21"
                showChevron
                icon={<AudioWaveIcon />}
                onClick={() => alert('Tag clicked!')}
              />
            </div>
          </div>
        </section>
      </main>

      <style jsx>{`
        .showcase-page {
          min-height: 100vh;
          background: #fafafa;
          font-family: var(--font-geist-sans), -apple-system, sans-serif;
        }

        .showcase-main {
          max-width: 800px;
          margin: 0 auto;
          padding: 64px 24px;
          display: flex;
          flex-direction: column;
          gap: 48px;
        }

        .showcase-header {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .showcase-title {
          font-size: 32px;
          font-weight: 700;
          color: #09090b;
          margin: 0;
        }

        .showcase-description {
          font-size: 16px;
          color: #71717a;
          margin: 0;
        }

        .showcase-section {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .section-title {
          font-size: 14px;
          font-weight: 600;
          color: #71717a;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin: 0;
          padding-bottom: 12px;
          border-bottom: 1px solid #e4e4e7;
        }

        .tag-row {
          display: flex;
          flex-wrap: wrap;
          gap: 24px;
        }

        .tag-row--align-center {
          align-items: center;
        }

        .tag-row--wrap {
          flex-wrap: wrap;
        }

        .tag-demo {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .demo-label {
          font-size: 12px;
          font-weight: 500;
          color: #a1a1aa;
        }

        @media (max-width: 480px) {
          .showcase-main {
            padding: 32px 16px;
            gap: 32px;
          }

          .showcase-title {
            font-size: 24px;
          }

          .tag-row {
            gap: 16px;
          }
        }
      `}</style>
    </div>
  );
}
