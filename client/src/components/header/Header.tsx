import React, { useEffect, useState } from 'react';
import logo from '../../assets/logo/long-logo.png';
import { GlobalOutlined, MenuOutlined, SearchOutlined, UserOutlined } from '@ant-design/icons';
import { EnvironmentOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Modal, Space } from 'antd';
import { NavLink, useNavigate } from 'react-router-dom';
import { RootState, useAppDispatch } from '../../store';
import { getListLocationRoomBySearch } from '../../store/managerLocationRoom.services/thunkAction';
import { useSelector } from 'react-redux';

import { managerAccountAction } from '../../store/managerAccount.services/slice';
const Header = () => {
    const AppDistPatch = useAppDispatch();
    const navigate = useNavigate();
    const { AccountUser } = useSelector((state: RootState) => state.managerAccount);
    useEffect(() => {
        AppDistPatch(managerAccountAction.getUser({}));
    }, []);

    const items: MenuProps['items'] = [
        {
            label: <>{AccountUser?.name === undefined ? '' : <div>Hi, {AccountUser?.name}</div>}</>,
            key: '0',
        },
        {
            label: (
                <>
                    {AccountUser?.name === undefined ? (
                        <NavLink to="login">Đăng nhập</NavLink>
                    ) : (
                        <NavLink to={'/trips'}>Chuyến đi</NavLink>
                    )}
                </>
            ),
            key: '1',
        },
        {
            label: (
                <>
                    {AccountUser?.name === undefined ? (
                        <NavLink to="register">Đăng ký</NavLink>
                    ) : (
                        <div>Thông báo</div>
                    )}
                </>
            ),
            key: '2',
        },
        {
            type: 'divider',
        },
        {
            label: <a href="#">Cho thuê chỗ ở qua Airbnb</a>,
            key: '3',
        },
        {
            label: <a href="#">Trợ giúp</a>,
            key: '4',
        },
        {
            label: (
                <>
                    {AccountUser?.name === undefined ? (
                        ''
                    ) : (
                        <div
                            onClick={async () => {
                                await AppDistPatch(managerAccountAction.logOut({}));
                                window.location.reload();
                            }}
                        >
                            Đăng xuất
                        </div>
                    )}
                </>
            ),

            key: '5',
        },
    ];

    // modal
    interface ShowSearchState {
        nameLocation: string;
        idLocal: number;
    }

    const { listLocationBySearch } = useSelector((state: RootState) => state.managerLocation);
    const [modal1Open, setModal1Open] = useState(false);
    const [modal2Open, setModal2Open] = useState(false);
    const [search, setSearch] = useState('');
    const [showSearch, setshowSearch] = useState<ShowSearchState>({
        nameLocation: '',
        idLocal: 0,
    });
    const hadleSearchHeader = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };
    const handllSubmitSearch = () => {
        let search2: any = {
            search1: search,
        };
        AppDistPatch(getListLocationRoomBySearch(search2));
    };
    const handleShowSearch = async (nameLocation: string, idLocation: number) => {
        await setshowSearch({
            nameLocation: nameLocation,
            idLocal: idLocation,
        });
        setModal2Open(false);
    };

    const hadleListSearch = () => {
        return listLocationBySearch?.map((item, i) => {
            return (
                <div
                    key={i}
                    className="box__location flex  p-5 my-5"
                    style={{ alignItems: 'center', borderRadius: '10px' }}
                    onClick={() => {
                        handleShowSearch(item.nameLocation, item.id);
                    }}
                >
                    <div style={{ display: 'flex', paddingRight: '10px' }}>
                        <EnvironmentOutlined
                            className="icon__location"
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                color: '#FF385C',
                                paddingRight: '5px',
                            }}
                        />{' '}
                        <span style={{ fontWeight: 'bold' }}>{item.nameLocation}</span>
                    </div>
                    <div>
                        {item.province} - {item.country}
                    </div>
                </div>
            );
        });
    };
    const hadleLinkListRoom = async (id: number) => {
        await navigate(`/mapRoom/${id}`);
        setModal1Open(false);
        setshowSearch({
            nameLocation: '',
            idLocal: 0,
        });
    };
    const hadleLocationShow = () => {
        return (
            <>
                <div className="search-bar-text2">
                    {showSearch.nameLocation === '' ? 'Vị trí cần tìm' : showSearch.nameLocation}
                    <EnvironmentOutlined className="icon__location" />
                </div>
                <div
                    className="search-icon-div"
                    onClick={() => {
                        hadleLinkListRoom(showSearch.idLocal);
                    }}
                >
                    <SearchOutlined style={{ display: 'flex', alignItems: 'center' }} />
                </div>
            </>
        );
    };
    return (
        <div className="full__screen__airbnb__nav">
            <div className="box__navbar__airbnb">
                <div className="navbar__box">
                    <div className="navbar__logo_box">
                        <NavLink to="/">
                            <img src={logo} alt="logo" className="navbar-logo" />
                        </NavLink>
                    </div>
                    <div className="box_nav_search">
                        <div className="search-bar-text">
                            <span onClick={() => setModal1Open(true)}>Điểm đến bất kỳ</span>
                        </div>
                        <div className="search-bar-text">Tuần bất kỳ</div>
                        <div className="search-bar-text2">Thêm khách</div>
                        <div className="search-icon-div">
                            <SearchOutlined />
                        </div>
                    </div>
                    <div className="box_nav_profile">
                        <div className="airbnb-your-home">Cho thuê chỗ ở qua Airbnb</div>
                        <div className="airbnb-your-home">
                            <GlobalOutlined />
                        </div>
                        <div className="profile-div">
                            <Dropdown menu={{ items }} trigger={['click']}>
                                <a onClick={(e) => e.preventDefault()}>
                                    <Space>
                                        <MenuOutlined className="menuAntd" />
                                        <UserOutlined className="UserAntd" />
                                    </Space>
                                </a>
                            </Dropdown>
                        </div>
                    </div>
                </div>
            </div>
            <Modal style={{ top: 20 }} open={modal1Open} onCancel={() => setModal1Open(false)}>
                <div className="box_nav_search__modal">
                    <div className="box_nav_search">
                        <div className="search-bar-text">
                            <span onClick={() => setModal2Open(true)}> Chọn địa điểm</span>
                        </div>
                        {hadleLocationShow()}
                    </div>
                </div>
            </Modal>
            <Modal style={{ top: 20 }} open={modal2Open} onCancel={() => setModal2Open(false)}>
                <div className="search__location__modal">
                    <div className="box__search__modal">
                        <form>
                            <input
                                type="text"
                                placeholder="Tìm địa điểm ?"
                                onChange={(e) => {
                                    hadleSearchHeader(e);
                                }}
                            />
                            <SearchOutlined
                                className="icon__search__modal"
                                onClick={() => {
                                    handllSubmitSearch();
                                }}
                            />
                        </form>
                    </div>
                    {hadleListSearch()}
                </div>
            </Modal>
        </div>
    );
};

export default Header;
