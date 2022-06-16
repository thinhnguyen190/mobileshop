import { Grid } from '@material-ui/core'
import React from 'react'
import { ImgItem, ListItemP } from './ListItemProduct.styled'

const ListItemProduct = (props) => {
    return (
        <ListItemP>
            <Grid container>
                {props.listItem.map(item => {
                    return <Grid item key={item.name} lg={2} className="itemP" xs={1}>
                        <div className="itemP-content">
                            <ImgItem bgItem={props.bgItem}>
                                <img src={item.img} alt="Error" />
                            </ImgItem>
                            <p>{item.name}</p>

                        </div>
                    </Grid>
                })}



            </Grid>
        </ListItemP>
    )
}

export default ListItemProduct
