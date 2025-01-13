import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Designing Fatigue Proof AI Systems</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main style={{ display: 'flex', justifyContent: 'center', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <div style={{ maxWidth: '800px', textAlign: 'center', width: '100%' }}>
          {/* Title Section */}
          <section>
            <h1>Designing Fatigue Proof AI Systems</h1>
            <h2>Quantifying AI Fatigue To Measure Detrimental Psychological Implications of Pervasive Use</h2>
                 <h3>AAIRC, Inc. -  A Minnesota AI Research Company</h3>
             <h4>Implementation Dates - 3/4/2024 - 11/17/2024</h4>
          </section>

          {/* Abstract Section */}
          <section style={{ marginTop: '20px', textAlign: 'left' }}>
            <h2>Abstract</h2>
            <p>
          AI Fatigue is a pervasive and costly issue, with many professionals experiencing its effects daily. Workplace fatigue contributes to decreased cognitive and physical performance, reduced productivity due to errors and burnout and diminished job satisfaction. These impacts often extend beyond the workplace, disrupting overall well-being and personal lives. To address workplace fatigue, strategies such as organizational adjustments, individual AI fatigue management training, and technology-driven interventions have been explored. Individual approaches, such as structured breaks, mindfulness exercises, and physical activity, have proven effective in mitigating AI fatigue and improving overall outcomes. However, these methods are often difficult to integrate into daily workflows, leading to inconsistent use and limited long-term benefits.
            </p>
          </section>
  <section style={{ marginTop: '20px', textAlign: 'left' }}>
            <h2>Case Study</h2>
   <p>
  The AI fatigue score was stored in the database for retrieval by the Adaptive Delivery (AD) component. 
  Our AI fatigue score incorporates factors such as work demands (e.g., email volume, calendar volume) and available resources (e.g., time of day), along with behavioral and/or physiological indicators of AI fatigue (e.g., facial expressions, heart rate). 
  These components were developed based on prior research and designed to provide a simple, explainable, continuous estimate of how likely an individual was experiencing AI fatigue. 
  While a more complex, machine-learning-based AI fatigue score could be developed in the future, we found this practical estimate sufficient for the purposes of our study. 
  We conducted a retrospective analysis to assess the correlation between our AI fatigue scores and participants' self-reported momentary AI fatigue levels, using ecological momentary assessments (EMAs) where participants rated their AI fatigue on a scale from 1 (Not at all AI fatigued) to 5 (Extremely AI fatigued). 
  Our analysis revealed a significant positive correlation between the AI fatigue score and self-reported AI fatigue levels (N=1318, Pearson r=0.2, p{"<"}0.01). 
</p>

          </section>                
        </div>
      </main>

      <Footer />
    </div>
  );
}
