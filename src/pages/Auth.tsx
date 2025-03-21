
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Button from '@/components/ui/Button';
import { useLocation, useNavigate } from 'react-router-dom';
import { LogIn, User, Mail, Lock, Building, Briefcase, ChevronRight } from 'lucide-react';

const Auth = () => {
  const [authType, setAuthType] = useState<'login' | 'signup'>('login');
  const [isCompany, setIsCompany] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Get query parameters from URL
    const params = new URLSearchParams(location.search);
    const type = params.get('type');
    const company = params.get('company');

    // Set auth type based on URL param
    if (type === 'signup') {
      setAuthType('signup');
    } else {
      setAuthType('login');
    }

    // Set isCompany based on URL param
    if (company === 'true') {
      setIsCompany(true);
    } else {
      setIsCompany(false);
    }

    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, [location]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would handle auth here

    // Simulate successful auth
    if (authType === 'login') {
      alert('Login successful!');
      navigate('/');
    } else {
      alert('Account created successfully!');
      navigate('/');
    }
  };

  const toggleAuthType = () => {
    const newType = authType === 'login' ? 'signup' : 'login';
    const searchParams = new URLSearchParams();
    searchParams.set('type', newType);
    if (isCompany) {
      searchParams.set('company', 'true');
    }
    navigate({ pathname: '/auth', search: searchParams.toString() });
  };

  const toggleUserType = () => {
    const newIsCompany = !isCompany;
    const searchParams = new URLSearchParams();
    searchParams.set('type', authType);
    if (newIsCompany) {
      searchParams.set('company', 'true');
    }
    navigate({ pathname: '/auth', search: searchParams.toString() });
  };

  return (
    <div className="min-h-screen flex flex-col page-transition">
      <Navbar />
      <main className="flex-grow flex items-center justify-center py-20">
        <div className="container max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Image/Info Column */}
            <div className="hidden md:block">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
                  alt="People volunteering"
                  className="rounded-lg shadow-lg object-cover h-[500px] w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg flex flex-col justify-end p-8">
                  <h2 className="text-white text-3xl font-bold mb-4">
                    {authType === 'login' ? 'Welcome Back!' : 'Join Our Community'}
                  </h2>
                  <p className="text-white/90 text-lg">
                    {authType === 'login'
                      ? 'Log in to access your account and continue making an impact.'
                      : 'Create an account to connect with meaningful volunteer opportunities and make a difference.'}
                  </p>
                </div>
              </div>
            </div>
            
            {/* Auth Form Column */}
            <div className="bg-card rounded-lg shadow-md p-8">
              {/* Mobile header */}
              <div className="md:hidden text-center mb-8">
                <h2 className="text-2xl font-bold mb-2">
                  {authType === 'login' ? 'Welcome Back!' : 'Join Our Community'}
                </h2>
                <p className="text-muted-foreground">
                  {authType === 'login'
                    ? 'Log in to access your account and continue making an impact.'
                    : 'Create an account to connect with meaningful volunteer opportunities and make a difference.'}
                </p>
              </div>
              
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-bold">
                  {authType === 'login' ? 'Login' : 'Sign Up'}
                </h3>
                {authType === 'signup' && (
                  <div className="flex items-center">
                    <span className="text-sm text-muted-foreground mr-2">I am a:</span>
                    <button
                      type="button"
                      onClick={toggleUserType}
                      className={`px-3 py-1 rounded-l-md text-sm ${
                        !isCompany
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted text-muted-foreground'
                      }`}
                    >
                      Volunteer
                    </button>
                    <button
                      type="button"
                      onClick={toggleUserType}
                      className={`px-3 py-1 rounded-r-md text-sm ${
                        isCompany
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted text-muted-foreground'
                      }`}
                    >
                      Organization
                    </button>
                  </div>
                )}
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {authType === 'signup' && (
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      {isCompany ? 'Organization Name' : 'Full Name'}
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-muted-foreground">
                        {isCompany ? <Building className="h-5 w-5" /> : <User className="h-5 w-5" />}
                      </span>
                      <input
                        type="text"
                        id="name"
                        required
                        placeholder={isCompany ? 'Organization name' : 'Your full name'}
                        className="w-full rounded-lg border border-input bg-background pl-10 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>
                )}
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-muted-foreground">
                      <Mail className="h-5 w-5" />
                    </span>
                    <input
                      type="email"
                      id="email"
                      required
                      placeholder="your@email.com"
                      className="w-full rounded-lg border border-input bg-background pl-10 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="password" className="block text-sm font-medium mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-muted-foreground">
                      <Lock className="h-5 w-5" />
                    </span>
                    <input
                      type="password"
                      id="password"
                      required
                      placeholder="••••••••"
                      className="w-full rounded-lg border border-input bg-background pl-10 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>
                
                {authType === 'signup' && isCompany && (
                  <div>
                    <label htmlFor="industry" className="block text-sm font-medium mb-2">
                      Industry
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-muted-foreground">
                        <Briefcase className="h-5 w-5" />
                      </span>
                      <select
                        id="industry"
                        required
                        className="w-full rounded-lg border border-input bg-background pl-10 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <option value="">Select industry</option>
                        <option value="nonprofit">Nonprofit</option>
                        <option value="education">Education</option>
                        <option value="healthcare">Healthcare</option>
                        <option value="environmental">Environmental</option>
                        <option value="social-services">Social Services</option>
                        <option value="arts-culture">Arts & Culture</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                )}
                
                {authType === 'login' && (
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        id="remember-me"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                      />
                      <label htmlFor="remember-me" className="ml-2 block text-sm text-muted-foreground">
                        Remember me
                      </label>
                    </div>
                    <div>
                      <a href="#" className="text-sm text-primary hover:underline">
                        Forgot password?
                      </a>
                    </div>
                  </div>
                )}
                
                <Button type="submit" className="w-full flex items-center justify-center gap-2">
                  {authType === 'login' ? (
                    <>
                      <LogIn className="h-4 w-4" />
                      <span>Sign In</span>
                    </>
                  ) : (
                    <>
                      <User className="h-4 w-4" />
                      <span>Create Account</span>
                    </>
                  )}
                </Button>
                
                <div className="relative flex items-center justify-center">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-border"></div>
                  </div>
                  <div className="relative bg-card px-4 text-sm text-muted-foreground">
                    or continue with
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  <button
                    type="button"
                    className="flex items-center justify-center py-2 px-4 bg-muted rounded-lg hover:bg-muted/80 transition-colors"
                  >
                    <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.0003 4.75C13.7703 4.75 15.3553 5.36002 16.6053 6.54998L20.0303 3.125C17.9502 1.19 15.2353 0 12.0003 0C7.31028 0 3.25527 2.69 1.28027 6.60998L5.27028 9.70498C6.21525 6.86002 8.87028 4.75 12.0003 4.75Z" fill="#EA4335"/>
                      <path d="M23.49 12.275C23.49 11.49 23.415 10.73 23.3 10H12V14.51H18.47C18.18 15.99 17.34 17.25 16.08 18.1L19.945 21.1C22.2 19.01 23.49 15.92 23.49 12.275Z" fill="#4285F4"/>
                      <path d="M5.26498 14.2949C5.02498 13.5699 4.88501 12.7999 4.88501 11.9999C4.88501 11.1999 5.01998 10.4299 5.26498 9.7049L1.275 6.60986C0.46 8.22986 0 10.0599 0 11.9999C0 13.9399 0.46 15.7699 1.28 17.3899L5.26498 14.2949Z" fill="#FBBC05"/>
                      <path d="M12.0004 24C15.2404 24 17.9654 22.935 19.9454 21.095L16.0804 18.095C15.0054 18.82 13.6204 19.25 12.0004 19.25C8.8704 19.25 6.21537 17.14 5.2654 14.295L1.27539 17.39C3.25539 21.31 7.3104 24 12.0004 24Z" fill="#34A853"/>
                    </svg>
                  </button>
                  <button
                    type="button"
                    className="flex items-center justify-center py-2 px-4 bg-muted rounded-lg hover:bg-muted/80 transition-colors"
                  >
                    <svg className="h-5 w-5 text-[#1877F2]" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9.94474914,22 L9.94474914,13.1657526 L7,13.1657526 L7,9.48481614 L9.94474914,9.48481614 L9.94474914,6.54006699 C9.94474914,3.49740494 11.8713513,2 14.5856738,2 C15.8857805,2 17.0033128,2.09717672 17.3287076,2.13987558 L17.3287076,5.32020466 L15.4462767,5.32094085 C13.9702212,5.32094085 13.6256856,6.02252733 13.6256856,7.05171716 L13.6256856,9.48481614 L17.306622,9.48481614 L16.5704347,13.1657526 L13.6256856,13.1657526 L13.6845806,22" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    className="flex items-center justify-center py-2 px-4 bg-muted rounded-lg hover:bg-muted/80 transition-colors"
                  >
                    <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22,15.61V8.39a1,1,0,0,0-.421-.806L12.75,1.171a1,1,0,0,0-1.158,0L2.421,7.584A1,1,0,0,0,2,8.39v7.22a1,1,0,0,0,.421.806l8.829,6.413a1,1,0,0,0,1.158,0l8.829-6.413A1,1,0,0,0,22,15.61Z"/>
                    </svg>
                  </button>
                </div>
                
                <div className="text-center text-sm text-muted-foreground">
                  {authType === 'login' ? (
                    <p>
                      Don't have an account?{' '}
                      <button
                        type="button"
                        onClick={toggleAuthType}
                        className="text-primary hover:underline font-medium inline-flex items-center"
                      >
                        <span>Sign up</span>
                        <ChevronRight className="h-3 w-3" />
                      </button>
                    </p>
                  ) : (
                    <p>
                      Already have an account?{' '}
                      <button
                        type="button"
                        onClick={toggleAuthType}
                        className="text-primary hover:underline font-medium inline-flex items-center"
                      >
                        <span>Log in</span>
                        <ChevronRight className="h-3 w-3" />
                      </button>
                    </p>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Auth;
