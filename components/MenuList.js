import * as React from 'react'
import { FlatList,Text } from 'react-native'
import { menu } from '../Menu'
import DetailMenu from './DetailMenu'

export default function MenuList () {
    return <FlatList data={menu} keyExtractor={(menu) => menu.id}
        renderItem={({item}) => <DetailMenu {...item}/>}
    />

}