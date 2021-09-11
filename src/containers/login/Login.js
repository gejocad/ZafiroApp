import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { removeError, setError } from '../../actions/uiAction';
import { startGoogleLogin, startFacebookLogin, startLogin } from '../../actions/authAction';
import {Link, useHistory} from 'react-router-dom';
import {toast} from 'react-toastify';
import {useFormik} from 'formik';
import {useTranslation} from 'react-i18next';
import * as Yup from 'yup';
import Button from '../../components/button/Button';
const Login = () => {
    const [isAuthLoading, setAuthLoading] = useState(false);
    const [isGoogleAuthLoading, setGoogleAuthLoading] = useState(false);
    const [isFacebookAuthLoading, setFacebookAuthLoading] = useState(false);
    const dispatch = useDispatch();

    const history = useHistory();
    const [t] = useTranslation();

    const login = async (email, password) => {
        try {
            setAuthLoading(true);
            dispatch(startLogin(email, password));
            toast.success('Login is succeed!');
            setAuthLoading(false);
            history.push('/');
        } catch (error) {
            setAuthLoading(false);
            toast.error(
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                    'Failed'
            );
        }
    };

    const loginByGoogle = async () => {
        try {
            setGoogleAuthLoading(true);
            toast.success('Login is succeeded!');
            setGoogleAuthLoading(false);
            dispatch(startGoogleLogin());
            history.push('/');
        } catch (error) {
            setGoogleAuthLoading(false);
            toast.error(
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                    'Failed'
            );
        }
    };

    const loginByFacebook = async () => {
        try {
            setFacebookAuthLoading(true);
            toast.success('Login is succeeded!');
            setFacebookAuthLoading(false);
            dispatch(startFacebookLogin());
            history.push('/');
        } catch (error) {
            setFacebookAuthLoading(false);
            toast.error(
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                    'Failed'
            );
        }
    };

    const printFormError = (formik, key) => {
        if (formik.touched[key] && formik.errors[key]) {
            return <div>{formik.errors[key]}</div>;
        }
        return null;
    };

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email('Invalid email address')
                .required('Required'),
            password: Yup.string()
                .min(5, 'Must be 5 characters or more')
                .max(30, 'Must be 30 characters or less')
                .required('Required')
        }),
        onSubmit: (values) => {
            console.log(values);
            login(values.email, values.password);
        }
    });

    document.getElementById('root').classList = 'hold-transition login-page';

    return (
        <div className="login-box">
            <div className="card card-outline card-primary">
                <div className="card-header text-center">
                    <Link to="/" className="h1">
                        <b>Zafiro</b>
                        <span>App</span>
                    </Link>
                </div>
                <div className="card-body">
                    <p className="login-box-msg">{t('login.label.signIn')}</p>
                    <form onSubmit={formik.handleSubmit}>
                        <div className="mb-3">
                            <div className="input-group">
                                <input
                                    name='email'
                                    type="email"
                                    className="form-control"
                                    placeholder="Email"
                                    {...formik.getFieldProps('email')}
                                />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-envelope" />
                                    </div>
                                </div>
                            </div>
                            {formik.touched.email && formik.errors.email ? (
                                <div>{formik.errors.email}</div>
                            ) : null}
                        </div>
                        <div className="mb-3">
                            <div className="input-group">
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Password"
                                    {...formik.getFieldProps('password')}
                                />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-lock" />
                                    </div>
                                </div>
                            </div>
                            {printFormError(formik, 'password')}
                        </div>

                        <div className="row">
                            <div className="col-8">
                                <div className="icheck-primary">
                                    <input type="checkbox" id="remember" />
                                    <label htmlFor="remember">
                                        {t('login.label.rememberMe')}
                                    </label>
                                </div>
                            </div>
                            <div className="col-4">
                                <Button
                                    block
                                    type="submit"
                                    isLoading={isAuthLoading}
                                    disabled={
                                        isFacebookAuthLoading ||
                                        isGoogleAuthLoading
                                    }
                                >
                                    {t('login.button.signIn.label')}
                                </Button>
                            </div>
                        </div>
                    </form>
                    <div className="social-auth-links text-center mt-2 mb-3">
                        <Button
                            block
                            icon="facebook"
                            onClick={loginByFacebook}
                            isLoading={isFacebookAuthLoading}
                            disabled={isAuthLoading || isGoogleAuthLoading}
                        >
                            {t('login.button.signIn.social', {
                                what: 'Facebook'
                            })}
                        </Button>
                        <Button
                            block
                            icon="google"
                            theme="danger"
                            onClick={loginByGoogle}
                            isLoading={isGoogleAuthLoading}
                            disabled={isAuthLoading || isFacebookAuthLoading}
                        >
                            {t('login.button.signIn.social', {what: 'Google'})}
                        </Button>
                    </div>
                    <p className="mb-1">
                        <Link to="/forgot-password">
                            {t('login.label.forgotPass')}
                        </Link>
                    </p>
                    <p className="mb-0">
                        <Link to="/register" className="text-center">
                            {t('login.label.registerNew')}
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;