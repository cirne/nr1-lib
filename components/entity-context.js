import {NerdletStateContext, EntityByGuidQuery} from 'nr1'

export default function EntityContext(props) {
  return <NerdletStateContext.Consumer>
    {({entityGuid}) => <EntityByGuidQuery entityGuid={entityGuid}>
        {({loading, data}) => {
          if(loading) return ""
          return props.children({entity: data.entities[0]})
        }} 
      </EntityByGuidQuery>
    }
  </NerdletStateContext.Consumer>
}