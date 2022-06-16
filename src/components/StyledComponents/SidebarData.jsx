import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';
import AssessmentIcon from '@mui/icons-material/Assessment';

export const SidebarData = [
  {
    title: 'ホーム',
    icon: <HomeIcon />,
    link: '/home',
    isActive: true,
  },
  {
    title: 'メール',
    icon: <EmailIcon />,
    link: '/mail',
    isActive: true,
  },
  {
    title: '分析',
    icon: <AssessmentIcon />,
    link: '/analitics',
    isActive: true,
  },
];
