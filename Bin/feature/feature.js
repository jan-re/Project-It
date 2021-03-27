import React from 'react';
import Content from '../universal/content';
import Headline from '../universal/headline';
import AddLine from '../universal/addLine';

const feature = (props) => {

    const contentArray = [];

    if (Object.keys(props.contentObj).length > 0) {
        for (let el in props.contentObj) {
            contentArray.push(<Content content={props.contentObj[el].content} />);
        };
    };

    return (
        <div className='row'>
            <Headline headlineTag='Feature'></Headline>
            <div className='column-2nd-2'>
                {contentArray}
                <AddLine createNewLine={props.createNewLine} container='feature'></AddLine>
            </div>        
        </div>
    );
};

export default feature;