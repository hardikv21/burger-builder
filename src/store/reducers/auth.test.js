import reducer from './auth';
import * as actionTypes from '../actions/actionTypes';

describe("auth reducer",
    () => {
        it("should return the initial state",
            () => {
                expect(reducer(undefined, {})).toEqual({
                    token: null,
                    userId: null,
                    error: null,
                    loading: false,
                    authRedirectPath: "/"
                });
            }
        );

        it("should store the token upon login",
            () => {
                expect(reducer({
                    token: null,
                    userId: null,
                    error: null,
                    loading: false,
                    authRedirectPath: "/"
                }, {
                    type: actionTypes.AUTH_SUCCESS,
                    token: "Some token",
                    userId: "Some id"
                })).toEqual({
                    token: "Some token",
                    userId: "Some id",
                    error: null,
                    loading: false,
                    authRedirectPath: "/"
                });
            }
        );
    }
);