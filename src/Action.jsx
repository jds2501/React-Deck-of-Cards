function Action({ name, callback, enabled }) {
    return (
        <>
            <button disabled={!enabled} onClick={callback}>{name}</button>
        </>
    );
}

export default Action;