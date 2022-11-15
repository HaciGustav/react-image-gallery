const Picture = (props) => {
    const { photographer, src: large } = props;
    return (
        <div className="photoWrap">
            <div className="picture">
                <img src={large} alt="" />
            </div>
            <p>{photographer}</p>
        </div>
    );
};
export default Picture;
