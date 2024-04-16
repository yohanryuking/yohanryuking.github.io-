import React, { useEffect, useState } from 'react';
import { Layout, Menu, Drawer, Table, Button, Modal, Form, Input } from 'antd';
import { MenuOutlined, UserOutlined, FileTextOutlined, ProfileOutlined, PictureOutlined, AppstoreAddOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { supabase } from '../Client';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';
import './Admin.css'; // Importamos los estilos




const { Header, Sider, Content } = Layout;

const Admin = () => {
    const [selectedMenu, setSelectedMenu] = useState('textos');
    const [data, setData] = useState(null);
    const [session, setSession] = useState(null);

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [form] = Form.useForm();
    const [editingRecord, setEditingRecord] = useState(null);

    const [drawerVisible, setDrawerVisible] = useState(true);
    const showDrawer = () => {
        setDrawerVisible(true);
    };

    const onClose = () => {
        setDrawerVisible(false);
    };

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

    const editar = (record) => {
        setEditingRecord(record);
        fetchData();
    };

    useEffect(() => {
        if (editingRecord) {
            showModal();
        }
    }, [editingRecord]);

    const borrar = async (id, tabla) => {
        console.log(id, tabla)
        const { data, error } = await supabase
            .from(tabla)
            .delete()
            .eq('id', id);

        if (error) console.log("Error: ", error);
        else console.log("Registro eliminado: ", data);
        fetchData();
    };

    const showModal = () => {
        if (editingRecord) {
            // Si estamos en modo de edición, rellenamos el formulario con los datos del registro
            form.setFieldsValue(editingRecord);
        } else {
            // Si estamos en modo de inserción, reseteamos el formulario
            form.resetFields();
        }
        setIsModalVisible(true);
    };

    const handleOk = async () => {
        const values = await form.validateFields();
        let data, error;
        if (editingRecord) {
            // Estamos en modo de edición, actualizamos el registro existente
            ({ data, error } = await supabase
                .from(selectedMenu)
                .update(values)
                .eq('id', editingRecord.id));
        } else {
            // Estamos en modo de inserción, insertamos un nuevo registro
            ({ data, error } = await supabase
                .from(selectedMenu)
                .insert(values));
        }
        if (error) {
            console.log("Error: ", error);
            toast.error('Ocurrió un error al realizar la operación');
        } else {
            toast.success('Operación realizada con éxito');
        }

        setIsModalVisible(false);
        setEditingRecord(null); // Reseteamos el registro que se está editando
        fetchData();
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    useEffect(() => {
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
        {
            title: 'Editar',
            key: 'editar',
            render: (text, record) => (
                <Button onClick={() => editar(record)} icon={<EditOutlined />} />
            ),
        },
    ];

    const categorias = [
        {
            title: 'Categorias',
            dataIndex: 'categorias',
            key: 'Categorias',
        },
        {
            title: 'Editar',
            key: 'editar',
            render: (text, record) => (
                <Button onClick={() => editar(record)} icon={<EditOutlined />} />
            ),
        },
        {
            title: 'Borrar',
            key: 'borrar',
            render: (text, record) => (
                <Button onClick={() => borrar(record.id, selectedMenu)} icon={<DeleteOutlined />} />
            ),
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
        {
            title: 'Editar',
            key: 'editar',
            render: (text, record) => (
                <Button onClick={() => editar(record)} icon={<EditOutlined />} />
            ),
        },
        {
            title: 'Borrar',
            key: 'borrar',
            render: (text, record) => (
                <Button onClick={() => borrar(record.id, selectedMenu)} icon={<DeleteOutlined />} />
            ),
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
        },
        {
            title: 'Editar',
            key: 'editar',
            render: (text, record) => (
                <Button onClick={() => editar(record)} icon={<EditOutlined />} />
            ),
        },
        {
            title: 'Borrar',
            key: 'borrar',
            render: (text, record) => (
                <Button onClick={() => borrar(record.id, selectedMenu)} icon={<DeleteOutlined />} />
            ),
        },
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
        },
        {
            title: 'Editar',
            key: 'editar',
            render: (text, record) => (
                <Button onClick={() => editar(record)} icon={<EditOutlined />} />
            ),
        },
    ]



    const agregarTextos = textos.filter(column => column.key !== 'editar');
    const agregarCategorias = categorias.filter(column => column.key !== 'editar' && column.key !== 'borrar');
    const agregarSubCategoria = subCategoria.filter(column => column.key !== 'editar' && column.key !== 'borrar');
    const agregarArticulos = articulos.filter(column => column.key !== 'editar' && column.key !== 'borrar');
    const agregarImagenes = imagenes.filter(column => column.key !== 'editar');


    return (
        <Layout style={{ minHeight: '100vh', width: '100vw' }}>
            <ToastContainer />
            <Button type="primary" onClick={showDrawer} style={{ marginBottom: 16, width: '100%' }}>
                <MenuOutlined />
            </Button>
            <Drawer
                title="Menu"
                placement="left"
                closable={false}
                onClose={onClose}
                visible={drawerVisible}
                width={300}
            >
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
            </Drawer>
            <Layout style={{ width: '100vw' }}>
                <Header style={{ background: '#fff', padding: 0 }}>
                    <h1>Administration Panel</h1>
                </Header>
                <Content style={{ margin: '24px 16px', width: '95%' }}>
                    <Button type="primary" onClick={showModal}>
                        Agregar
                    </Button>
                    <Modal title="Agregar" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                        <Form form={form} layout="vertical">
                            {selectedMenu === 'textos' && (
                                <>
                                    {agregarTextos.map((column) => (
                                        <Form.Item name={column.dataIndex} label={column.title} rules={[{ required: true }]}>
                                            <Input />
                                        </Form.Item>
                                    ))}
                                    {/* <p>Los textos solo son para editarse</p> */}
                                </>
                            )}
                            {selectedMenu === 'categorias' && (
                                <>
                                    {agregarCategorias.map((column) => (
                                        <Form.Item name={column.dataIndex} label={column.title} rules={[{ required: true }]}>
                                            <Input />
                                        </Form.Item>
                                    ))}
                                </>
                            )}
                            {selectedMenu === 'subCategoria' && (
                                <>
                                    {agregarSubCategoria.map((column) => (
                                        <Form.Item name={column.dataIndex} label={column.title} rules={[{ required: true }]}>
                                            <Input />
                                        </Form.Item>
                                    ))}
                                </>
                            )}
                            {selectedMenu === 'articulos' && (
                                <>
                                    {agregarArticulos.map((column) => (
                                        <Form.Item name={column.dataIndex} label={column.title} rules={[{ required: true }]}>
                                            <Input />
                                        </Form.Item>
                                    ))}
                                </>
                            )}
                            {selectedMenu === 'imagenes' && (
                                <>
                                    {agregarImagenes.map((column) => (
                                        <Form.Item name={column.dataIndex} label={column.title} rules={[{ required: true }]}>
                                            <Input />
                                        </Form.Item>
                                    ))}
                                    {/* <p>Las imagenes solo son para editarse</p> */}
                                </>
                            )}
                        </Form>
                    </Modal>
                    {selectedMenu === 'textos' && <Table className="responsive-table" dataSource={data} columns={textos} />}
                    {selectedMenu === 'categorias' && <Table className="responsive-table" dataSource={data} columns={categorias} />}
                    {selectedMenu === 'subCategoria' && <Table className="responsive-table" dataSource={data} columns={subCategoria} />}
                    {selectedMenu === 'articulos' && <Table className="responsive-table" dataSource={data} columns={articulos} />}
                    {selectedMenu === 'imagenes' && <Table className="responsive-table" dataSource={data} columns={imagenes} />}
                </Content>
            </Layout>
        </Layout>
    );
};

export default Admin;
