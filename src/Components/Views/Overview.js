import overviewData from '../../initial_data.json';
import addotinalData from '../../additional_data.json';
import Chart from './OverviewSection/Chart';
import Intro from './OverviewSection/Intro';
import SupportRequests from './OverviewSection/SupportRequests';
import Terms from './OverviewSection/Terms';

const Overview = props => {

    const {general, charts, terms, supportRequests} = overviewData;
    return (
        <div className={`view ${props.class}` }>
            <Intro general={general} />
            <section className="charts">
                  {Object.keys(charts).map( chart => (
                     <Chart key={chart}  chartType={chart} followers={charts[chart].followersCount} />
                  ))}
                  <Terms terms={terms} />
            </section>
            <SupportRequests requestsList={supportRequests} addotinalData={addotinalData} />
        </div>
      );
}

export default Overview;