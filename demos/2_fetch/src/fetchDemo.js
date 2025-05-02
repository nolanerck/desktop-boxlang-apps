var _btn = document.getElementById( "btnMusic" );
_btn.addEventListener( "click", () => 
{
    getData( "http://127.0.0.1:60810/api_noFramework/listBands.bxm" );
});


/* modififed version of this: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch */
async function getData( myAPIendpoint ) 
{
    const url = myAPIendpoint;

    try 
    {
        const response = await fetch( url );

        if( !response.ok )
        {
            throw new Error(`Response status: ${response.status}`);
        }
  
        const json = await response.json();
        console.log( json );

        renderBands( json );
    } 
    catch( error )
    {
        console.error( error );
    }
}

function renderBands( aryBands )
{
    let _el   = document.querySelector( "#bandList" );

    aryBands.forEach( band => {
        let _item = document.createElement( "li" );
        let _text = document.createTextNode( band );
        _item.appendChild( _text );
        _el.appendChild( _item );
    });
}

