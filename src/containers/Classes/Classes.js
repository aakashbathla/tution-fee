import React, { Component } from 'react'

class Classes extends Component {
    render() {
        const listDetailHeader = ['Class Name','Id'];
        const listDetailData = [
            {
                id: 1,
                className: 'IX'
            },
            {
                id: 2,
                className: 'X'
            },
            {
                id: 3,
                className: 'XI'
            },
            {
                id: 4,
                className: 'XII'
            }
        ]
        return (
            <div>
                <List listDetailHeader={listDetailHeader} listDetailData={listDetailData} delete={deleteClassHandler} edit={editClassHandler} search={searchClassHandler} add={addClassHandler} />
            </div>
        )
    }
}
export default Classes