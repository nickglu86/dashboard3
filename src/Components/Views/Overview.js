import overviewData from '../../initial_data.json';
import Chart from './OverviewSection/Chart';
import Intro from './OverviewSection/Intro';
import SupportRequests from './OverviewSection/SupportRequests';
import Terms from './OverviewSection/Terms';

const Overview = () => {

    const {general, charts, terms, supportRequests} = overviewData;
    return (
        <div className="view">
            <Intro general={general} />
            <section className="charts">
                  {Object.keys(charts).map( chart => (
                     <Chart key={chart}  chartType={chart} followers={charts[chart].followersCount} />
                  ))}
                  <Terms terms={terms} />
            </section>
            <SupportRequests />
        </div>
      );
}

export default Overview;