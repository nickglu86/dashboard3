 const Chart = props => {

    const chartGeneral = props.chartType == 'general';
    const chartTitle = chartGeneral ? 'General results' : 'Ratings by category';
    const chartTheme = chartGeneral ? 'blue' : 'red';
    const followers = props.followers;
    return(
        <div className={`chart box ${chartTheme}`} >
            <div className="chart-inner">
                <h3>{chartTitle}</h3>
                <div className="data">
                    <div>
                        <div className="followers" >
                                <span> {followers.toLocaleString()} </span> Followers 
                        </div>
                        <div className="graph" />
                    </div>
                    <div className="pie" />
                </div>
            </div>
        </div>
    )
}

export default Chart;