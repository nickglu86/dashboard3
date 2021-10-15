 const Chart = props => {

    const chartGeneral = props.chartType == 'general';
    const chartTitle = chartGeneral ? 'General results' : 'Ratings by category';
    const chartTheme = chartGeneral ? 'blue' : 'red';
    const followers = props.followers;
    return(
        <div className={`chart box ${chartTheme}`} >
            <h3>{chartTitle}</h3>
            <div className="data">
                <div>
                    <div className="followers" >
                            <span> {followers} </span> Followers 
                     </div>
                     <div className="graph" />
                </div>
                <div className="pie" />
            </div>
        </div>
    )
}

export default Chart;