const Intro = props => {
    const { insertionsCount : count } = props.general;
    return (
        <section className="intro">
            <h2>Data Overview</h2>
            <div className="progress">
                <progress value={count} max="1000" />
                <div className='count'> 
                    <b>{count}</b> 
                    <span>insertions needed to complete </span>
                 </div>
            </div>
        </section>
      );
}

export default Intro;