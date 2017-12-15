/* @flow */

type Success = {| success: true, value: boolean |};
type Failed  = {| error: true, message: string |};

type Response = Success | Failed;

const handleResponse = (response: Response) => {
    return response.success
        ? response.value
        : response.message;
};
