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
            <h2>A Case Study Of 74 AI Specialists Minimizing AI Fatigue</h2>
          </section>

          {/* Abstract Section */}
          <section style={{ marginTop: '20px', textAlign: 'left' }}>
            <h2>Abstract</h2>
            <p>
              Fatigue is a pervasive and costly issue, with many professionals experiencing its effects daily. Workplace
              fatigue contributes to decreased cognitive and physical performance, reduced productivity due to errors and
              burnout, diminished job satisfaction, and increased incidents of fatigue-related accidents. These impacts
              often extend beyond the workplace, disrupting overall well-being and personal lives. To address workplace
              fatigue, strategies such as organizational adjustments, individual fatigue management training, and
              technology-driven interventions have been explored. Individual approaches, such as structured breaks,
              mindfulness exercises, and physical activity, have proven effective in mitigating fatigue and improving
              overall outcomes. However, these methods are often difficult to integrate into daily workflows, leading to
              inconsistent use and limited long-term benefits.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
