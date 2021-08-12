import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@material-ui/core';
import { useState } from 'react';
import { useRef } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { getRequest, postRequest } from '../../api/api';
import { urls } from '../../constants/urls';
import Context from '../../store/context';
import { actionTypes } from '../../store/reducer';
import { FilesWrapper, StyledButton } from './Files.styled';

/**
 * Компонент для отрисовки страницы с файламии
 */
const Files = () => {
    const { state, dispatch, enqueueSnackbar } = useContext(Context);
    const [file, setFile] = useState(null);
    const [page, setPage] = useState(0);
    const { getFilesError, files, username, isAuth, fileUploadError, isFileUploaded } = state;

    const hiddenFileInput = useRef();

    useEffect(() => {
        if (isFileUploaded && username) {
            enqueueSnackbar('File uploaded', {
                variant: 'success',
            });
            dispatch({ type: actionTypes.SET_FILE_UPLOADED, payload: false });
            getRequest(`${urls.GET_FILES}/${username}/files`, actionTypes.GET_FILES, dispatch);
        }
        // eslint-disable-next-line
    }, [isFileUploaded, username]);

    useEffect(() => {
        if (fileUploadError) {
            enqueueSnackbar('File upload error', {
                variant: 'error',
            });
            dispatch({ type: actionTypes.SET_FILE_UPLOAD_ERROR, payload: false });
        }
        // eslint-disable-next-line
    }, [fileUploadError]);

    useEffect(() => {
        if (file) {
            const formData = new FormData();
            formData.append('file', file);
            postRequest(`${urls.POST_FILE}/${username}/files/upload`, actionTypes.FILE_UPLOAD, dispatch, formData, true);
            setFile(null);
        }
        // eslint-disable-next-line
    }, [file, username]);

    useEffect(() => {
        if (username) {
            dispatch({ type: actionTypes.SET_SHOW_SPINNER, payload: true });
            getRequest(`${urls.GET_FILES}/${username}/files`, actionTypes.GET_FILES, dispatch);
        }

        // eslint-disable-next-line
    }, [username]);

    useEffect(() => {
        if (getFilesError) {
            enqueueSnackbar('Get files error', {
                variant: 'error',
            });
            dispatch({ type: actionTypes.SET_FILES_ERROR, payload: false });
        }
        // eslint-disable-next-line
    }, [getFilesError]);

    const fileAddHandler = () => {
        setFile(null);
        hiddenFileInput.current.value = null;
        hiddenFileInput.current.click();
    };

    const fileChangeHandler = (e) => {
        const fileUploaded = e.target.files[0];
        setFile(fileUploaded);
    };

    const handleChangePage = (_, newPage) => setPage(newPage);

    const handleDownload = (id) => () => {
        getRequest(`${urls.FILE_DOWNLOAD}/${id}`, actionTypes, dispatch);
    };

    return (
        <FilesWrapper>
            {isAuth ? (
                <div>
                    <input type='file' ref={hiddenFileInput} onChange={fileChangeHandler} style={{ display: 'none' }} />
                    {files?.length === 0 && <div>No files</div>}
                    <StyledButton onClick={fileAddHandler} variant='outlined'>
                        Add file
                    </StyledButton>
                    {files?.length > 0 && (
                        <Paper>
                            <TableContainer>
                                <Table size='small'>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>ID</TableCell>
                                            <TableCell align='right'>File name</TableCell>
                                            <TableCell align='right'>Download</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {files.slice(page * 10, page * 10 + 10).map((element) => (
                                            <TableRow key={element.id}>
                                                <TableCell component='th' scope='row'>
                                                    {element.id}
                                                </TableCell>
                                                <TableCell align='right'>{element.filename}</TableCell>
                                                <TableCell align='right'>
                                                    <Button variant='outlined' onClick={handleDownload(element.id)}>
                                                        Download
                                                    </Button>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            <TablePagination page={page} rowsPerPageOptions={[10]} onPageChange={handleChangePage} rowsPerPage={10} component='div' count={files.length} />
                        </Paper>
                    )}
                </div>
            ) : (
                <div>You are not auth</div>
            )}
        </FilesWrapper>
    );
};

export default Files;
