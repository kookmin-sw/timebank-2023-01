import { Card, Space, Table } from 'antd';

import { topWrapperCSS, rightAlignCSS } from './UserManagement.styles';
import SearchForm from './searchForm';


import React from 'react';
import { useState } from 'react';
import type { ColumnsType } from 'antd/es/table';

import ProfileImageModal from './profileImageModal';
import DetailModal from './detailModal';
import EditModal from './editModal';
import { IUserInfo } from '../../api/interfaces/IUser';

import MainTable from './mainTable';

const UserManagementPage = () => {
  const [selectedUserInfoIds, setSelectedUserInfoIds] = useState<React.Key[]>();
  const [selectedUserInfos, setSelectedUserInfos] = useState<IUserInfo[]>();

  return (

    <Card title="회원 관리" css={topWrapperCSS}>
      <SearchForm />
      <MainTable
        selectedUserInfoIds={selectedUserInfoIds}
        setSelectedUserInfoIds={setSelectedUserInfoIds}
        setSelectedUserInfos={setSelectedUserInfos}
      />
    </Card>
  );
};

export default UserManagementPage;
