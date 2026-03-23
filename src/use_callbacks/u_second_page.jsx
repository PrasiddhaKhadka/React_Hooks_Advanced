import React from "react";

const USecondPage = React.memo((props) => {
    console.log('Child Component Re-rendered Again !!!');

    return (
        <div>
            <div>Use Call Back Second</div>
            <button className="bg-red-600 p-3.5" onClick={props.handleClick}>
                {props.buttonName}
            </button>
        </div>
    );
});

export default USecondPage;