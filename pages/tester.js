import React from 'react';
import {Button, Tabs} from "devextreme-react";

function Tester(props) {
    const items =[{
        text:'salam',
        icon:"search"
    },
        {
            text:"khobi",
            icon:"user"
        }
    ]
    return( <div>

        <Button icon={'search'} stylemode={"text"} />
      <Tabs
          dataSource={items}
      />



    </div>);
}

export default Tester;