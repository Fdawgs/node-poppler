mkdir build
cd build

:: Remove /GL from CXXFLAGS as this causes an error with the 
:: cmake 'export all symbols' functionality
set "CXXFLAGS= -MD"

cmake -G "Ninja" ^
      -D CMAKE_BUILD_TYPE=Release ^
      -D CMAKE_PREFIX_PATH=%LIBRARY_PREFIX% ^
      -D CMAKE_INSTALL_LIBDIR:PATH=%LIBRARY_LIB% ^
      -D CMAKE_INSTALL_PREFIX=%LIBRARY_PREFIX% ^
      -D ENABLE_UNSTABLE_API_ABI_HEADERS=True ^
      -D ENABLE_LIBCURL=True ^
      -D ENABLE_LIBOPENJPEG=openjpeg2 ^
      -D ENABLE_RELOCATABLE=OFF ^
       %SRC_DIR%
if errorlevel 1 exit 1	   

cmake --build . --config Release --target install
if errorlevel 1 exit 1
