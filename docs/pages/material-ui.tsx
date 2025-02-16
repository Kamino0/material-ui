import * as React from 'react';
import Divider from '@mui/material/Divider';
import Head from 'docs/src/modules/components/Head';
import BrandingCssVarsProvider from 'docs/src/BrandingCssVarsProvider';
import AppHeader from 'docs/src/layouts/AppHeader';
import MaterialHero from 'docs/src/components/productMaterial/MaterialHero';
import MaterialComponents from 'docs/src/components/productMaterial/MaterialComponents';
import MaterialTheming from 'docs/src/components/productMaterial/MaterialTheming';
import MaterialStyling from 'docs/src/components/productMaterial/MaterialStyling';
import MaterialTemplates from 'docs/src/components/productMaterial/MaterialTemplates';
import MaterialDesignKits from 'docs/src/components/productMaterial/MaterialDesignKits';
import CoreHeroEnd from 'docs/src/components/productCore/CoreHeroEnd';
import References, { CORE_CUSTOMERS } from 'docs/src/components/home/References';
import AppFooter from 'docs/src/layouts/AppFooter';
import AppHeaderBanner from 'docs/src/components/banner/AppHeaderBanner';

export default function Core() {
  return (
    <BrandingCssVarsProvider>
      <Head
        title="Material UI: A meticulous React implementation of Google's Material Design."
        description="Material UI is an open-source React component library that implements Google's Material Design. It's comprehensive and can be used in production out of the box."
        card="/static/social-previews/materialui-preview.jpg"
      />
      <AppHeaderBanner />
      <AppHeader gitHubRepository="https://github.com/mui/material-ui" />
      <main id="main-content">
        <MaterialHero />
        <References companies={CORE_CUSTOMERS} />
        <Divider />
        <MaterialComponents />
        <Divider />
        <MaterialTheming />
        <Divider />
        <MaterialStyling />
        <Divider />
        <MaterialTemplates />
        <Divider />
        <MaterialDesignKits />
        <Divider />
        <CoreHeroEnd />
        <Divider />
      </main>
      <AppFooter stackOverflowUrl="https://stackoverflow.com/questions/tagged/material-ui" />
    </BrandingCssVarsProvider>
  );
}
