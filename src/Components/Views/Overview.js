import Intro from './OverviewSection/Intro';
import Chart from './OverviewSection/Chart';
import Requests from './OverviewSection/Requests';
import Terms from './OverviewSection/Terms';

import InitialData from '../../initial_data.json';
import AdditionalData from '../../additional_data.json';

const Overview = ({activeClass}) => {
    const {general, charts, terms, supportRequests} = InitialData;

    return (
        <div className={`view ${activeClass}` }>
            <Intro general={general} />
            <section className="charts">
                  {Object.keys(charts).map( chart => (
                     <Chart key={chart}  chartType={chart} followers={charts[chart].followersCount} />
                  ))}
                <Terms terms={terms} />
            </section>
            <Requests reqList={supportRequests} additData={AdditionalData} />
        </div>
      );
}

export default Overview;