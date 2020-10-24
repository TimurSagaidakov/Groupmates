import React, { Suspense } from 'react';
import Loader from '../loader/loader';
import { Route } from 'react-router-dom';
export const WithSuspense= (Component,link) =>{
return <Route path ={link} render={ () => {
              return  <Suspense fallback={<Loader/>}>
                        <Component /> 
                      </Suspense>
                }          
            }/>
}

export default WithSuspense;