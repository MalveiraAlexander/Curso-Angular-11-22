export class PermissionResponseModel {
    id: number;
    name: string;
    isEnable: boolean;
    deleteAt?: any;
}

export class RoleResponseModel {
    id: number;
    name: string;
    description: string;
    permissions: PermissionResponseModel[];
}
