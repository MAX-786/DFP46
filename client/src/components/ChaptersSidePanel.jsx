import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import InfoIcon from '@mui/icons-material/Info';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import Diversity2Icon from '@mui/icons-material/Diversity2';
import { Link } from "react-router-dom";

import { TreeView } from '@mui/x-tree-view/TreeView';
import { TreeItem, treeItemClasses } from '@mui/x-tree-view/TreeItem';

const StyledTreeItemRoot = styled(TreeItem)(({ theme }) => ({
    color: theme.palette.text.secondary,
    [`& .${treeItemClasses.content}`]: {
        color: theme.palette.text.secondary,
        borderTopRightRadius: theme.spacing(2),
        borderBottomRightRadius: theme.spacing(2),
        paddingRight: theme.spacing(1),
        fontWeight: theme.typography.fontWeightMedium,
        '&.Mui-expanded': {
            fontWeight: theme.typography.fontWeightRegular,
        },
        '&:hover': {
            backgroundColor: theme.palette.action.hover,
        },
        '&.Mui-focused, &.Mui-selected, &.Mui-selected.Mui-focused': {
            backgroundColor: `var(--tree-view-bg-color, ${theme.palette.action.selected})`,
            color: 'var(--tree-view-color)',
        },
        [`& .${treeItemClasses.label}`]: {
            fontWeight: 'inherit',
            color: 'inherit',
        },
    },
    [`& .${treeItemClasses.group}`]: {
        marginLeft: 0,
        [`& .${treeItemClasses.content}`]: {
            paddingLeft: theme.spacing(2),
        },
    },
}));

const StyledTreeItem = React.forwardRef(function StyledTreeItem(props, ref) {
    const theme = useTheme();
    const {
        bgColor,
        color,
        labelIcon: LabelIcon,
        labelText,
        colorForDarkMode,
        bgColorForDarkMode,
        ...other
    } = props;

    const styleProps = {
        '--tree-view-color': theme.palette.mode !== 'dark' ? color : colorForDarkMode,
        '--tree-view-bg-color':
            theme.palette.mode !== 'dark' ? bgColor : bgColorForDarkMode,
    };

    return (
        <StyledTreeItemRoot
            label={
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        p: 0.5,
                        pr: 0,
                    }}
                >
                    <Box component={LabelIcon} color="inherit" sx={{ mr: 1 }} />
                    <Typography variant="body2" sx={{ fontWeight: 'inherit', flexGrow: 1 }}>
                        {labelText}
                    </Typography>
                    <Typography variant="caption" color="inherit">
                    </Typography>
                </Box>
            }
            style={styleProps}
            {...other}
            ref={ref}
        />
    );
});

export default function SideBar({ chapter, setInfoDetails }) {

    return (
        <TreeView
            defaultExpanded={['1']}
            defaultCollapseIcon={<ArrowDropDownIcon />}
            defaultExpandIcon={<ArrowRightIcon />}
            defaultEndIcon={<div style={{ width: 24 }} />}
            sx={{  flexGrow: 1, overflowY: 'scroll',height:620 }}
        >
            <StyledTreeItem nodeId="0" labelText={chapter.title} labelIcon={AcUnitIcon}>
                {chapter.sections.map((section, index) => (
                    <StyledTreeItem
                        key={index}
                        nodeId={String(index + 1)}
                        labelText={ `${chapter.id}.${section.id} ${section.name}`}
                        labelIcon={InfoIcon}
                        color="#1a73e8"
                        bgColor="#e8f0fe"
                        colorForDarkMode="#B8E7FB"
                        bgColorForDarkMode="#071318"
                        sx={{marginY:1}}
                        onClick={() => setInfoDetails({ chapter: chapter, section: section })}
                    />
                ))}
            </StyledTreeItem>
        </TreeView>
    );
}
