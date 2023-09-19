type ServiceResponseErrorType = 'INVALID_DATA' | 'UNAUTHORIZED' | 'NOT_FOUND';

type ServiceResponseSuccessType = 'SUCCESS' | 'NOT_CONTENT' | 'CREATED';

export type ServiceResponseError<Type> = {
  status: ServiceResponseErrorType,
  data: Type,
};

export type ServiceResponseSuccess<Type> = {
  status: ServiceResponseSuccessType,
  data: Type,
};

export type ServiceResponse<Type> = ServiceResponseError<Type> | ServiceResponseSuccess<Type>;