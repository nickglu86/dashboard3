const Intro = props => {
    const { insertionsCount : count } = props.general;
    return (
        <section className="intro">
            <h2>Data Overview</h2>
            <div>
                <progress value={count} max="1000" />
                <span> 
                    <b>{count}</b> insertions needed to complete
                 </span>
            </div>
        </section>
      );
}

export default Intro;