import React, { useEffect, useState } from 'react';
import { Layout, Menu, Table, Button, Modal, Form, Input } from 'antd';
import { UserOutlined, FileTextOutlined, ProfileOutlined, PictureOutlined, AppstoreAddOutlined } from '@ant-design/icons';
import { supabase } from '../Client';

const { Header, Sider, Content } = Layout;

const Admin = () => {
    const [selectedMenu, setSelectedMenu] = useState('textos');
    const [data, setData] = useState(null);

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [form] = Form.useForm();

    const showModal = () => {
        setIsModalVisible(true);
    }

    const handleOk = async () => {
        const values = await form.validateFields();
        let { data, error } = await supabase
            .from(selectedMenu)
            .insert(values);
        if (error) console.log("Error: ", error);

        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    useEffect(() => {
        const fetchData = async () => {
            let tableName;
            switch (selectedMenu) {
                case 'textos':
                    tableName = 'textos';
                    break;
                case 'categorias':
                    tableName = 'categorias';
                    break;
                case 'subCategoria':
                    tableName = 'subCategoria';
                    break;
                case 'articulos':
                    tableName = 'articulos';
                    break;
                case 'imagenes':
                    tableName = 'imagenes';
                    break;
                default:
                    tableName = 'textos';
            }

            let { data, error } = await supabase
                .from(tableName)
                .select('*');

            if (error) console.log("Error: ", error);
            else setData(data);
        };
        fetchData();
    }, [selectedMenu]);


    const handleMenuClick = (menu) => {
        setSelectedMenu(menu.key);
    };

    const textos = [
        {
            title: 'Titulo',
            dataIndex: 'titulo',
            key: 'titulo',
        },
        {
            title: 'Subtitulo',
            dataIndex: 'subtitulo',
            key: 'subtitulo',
        },
        {
            title: 'Titulo 2',
            dataIndex: 'titulo2',
            key: 'titulo2',
        },
        {
            title: 'Contenido 2',
            dataIndex: 'contenido2',
            key: 'contenido2',
        },
    ];

    const categorias = [
        {
            title: 'Categorias',
            dataIndex: 'categorias',
            key: 'Categorias',
        },
    ];

    const subCategoria = [
        {
            title: 'Padre',
            dataIndex: 'padre',
            key: 'padre',
        },
        {
            title: 'SubCategoria',
            dataIndex: 'subCategoria',
            key: 'subCategoria',
        },
    ];

    const articulos = [
        {
            title: 'Precio',
            dataIndex: 'precio',
            key: 'precio',
        },
        {
            title: 'Foto url',
            dataIndex: 'fotoUrl',
            key: 'fotoUrl',
        },
        {
            title: 'Categoria',
            dataIndex: 'categoria',
            key: 'categoria',
        }
    ];

    const imagenes = [
        {
            title: 'Logo', //logo
            dataIndex: 'logo',
            key: 'logo',
        },
        {
            title: 'Fondo 1',
            dataIndex: 'fondo1',
            key: 'fondo1',
        },
        {
            title: 'Fondo 2',
            dataIndex: 'fondo2',
            key: 'fondo2',
        }
    ]

    return (
        <Layout style={{ minHeight: '100vh', width: '100vw' }}>
            <Sider width={200}>
                <Menu
                    mode="inline"
                    selectedKeys={[selectedMenu]}
                    onClick={handleMenuClick}
                >
                    <Menu.Item key="textos" icon={<FileTextOutlined />}>
                        textos
                    </Menu.Item>
                    <Menu.Item key="categorias" icon={<ProfileOutlined />}>
                        categorias
                    </Menu.Item>
                    <Menu.Item key="subCategoria" icon={<AppstoreAddOutlined />}>
                        subCategoria
                    </Menu.Item>
                    <Menu.Item key="articulos" icon={<UserOutlined />}>
                        articulos
                    </Menu.Item>
                    <Menu.Item key="imagenes" icon={<PictureOutlined />}>
                        imagenes
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout>
                <Header style={{ background: '#fff', padding: 0 }}>
                    <h1>Administration Panel</h1>
                </Header>
                <Content style={{ margin: '24px 16px', width: 'calc(100% - 200px)' }}>
                    <Button type="primary" onClick={showModal}>
                        Agregar
                    </Button>
                    <Modal title="Agregar" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                        <Form form={form} layout="vertical">
                            {selectedMenu === 'textos' && (
                                <>
                                    {textos.map((column) => (
                                        <Form.Item name={column.dataIndex} label={column.title} rules={[{ required: true }]}>
                                            <Input />
                                        </Form.Item>
                                    ))}
                                </>
                            )}
                            {selectedMenu === 'categorias' && (
                                <>
                                    {categorias.map((column) => (
                                        <Form.Item name={column.dataIndex} label={column.title} rules={[{ required: true }]}>
                                            <Input />
                                        </Form.Item>
                                    ))}
                                </>
                            )}
                            {selectedMenu === 'subcategorias' && (
                                <>
                                    {subCategoria.map((column) => (
                                        <Form.Item name={column.dataIndex} label={column.title} rules={[{ required: true }]}>
                                            <Input />
                                        </Form.Item>
                                    ))}
                                </>
                            )}
                            {selectedMenu === 'articulos' && (
                                <>
                                    {articulos.map((column) => (
                                        <Form.Item name={column.dataIndex} label={column.title} rules={[{ required: true }]}>
                                            <Input />
                                        </Form.Item>
                                    ))}
                                </>
                            )}
                            {selectedMenu === 'imagenes' && (
                                <>
                                    {imagenes.map((column) => (
                                        <Form.Item name={column.dataIndex} label={column.title} rules={[{ required: true }]}>
                                            <Input />
                                        </Form.Item>
                                    ))}
                                </>
                            )}
                        </Form>
                    </Modal>
                    {selectedMenu === 'textos' && <Table dataSource={data} columns={textos} />}
                    {selectedMenu === 'categorias' && <Table dataSource={data} columns={categorias} />}
                    {selectedMenu === 'subCategoria' && <Table dataSource={data} columns={subCategoria} />}
                    {selectedMenu === 'articulos' && <Table dataSource={data} columns={articulos} />}
                    {selectedMenu === 'imagenes' && <Table dataSource={data} columns={imagenes} />}
                </Content>
            </Layout>
        </Layout>
    );
};

export default Admin;
