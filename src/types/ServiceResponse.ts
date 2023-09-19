type ServiceResponseErrorType = 'INVALID_DATA' | 'UNAUTHORIZED' | 'NOT_FOUND';

type ServiceResponseSuccessType = 'SUCCESSFUL' | 'NOT_CONTENT' | 'CREATED';

export type ServiceResponseError = {
  status: ServiceResponseErrorType,
  data: { message: string },
};

export type ServiceResponseSuccess<Type> = {
  status: ServiceResponseSuccessType,
  data: Type,
};

export type ServiceResponse<Type> = ServiceResponseError | ServiceResponseSuccess<Type>;