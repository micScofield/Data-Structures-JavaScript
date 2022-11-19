let formGroup = [
  {
    groupName: 'General',
    groupId: 'generalInformation',
    expandByDefault: true,
    disableAutosave: true,
    islands: [
      {
        islandType: 'full',
        islandFields: [
          {
            name: 'aptBusinessObjectSummary',
            label: 'Summary',
            isRequired: true,
            type: 'string',
            islandType: 'full',
            islandFieldName: 'aptBusinessObjectSummary',
          },
        ],
      },
      {
        islandType: 'full',
        islandFields: [
          {
            name: 'aptBusinessObjectDescription',
            label: 'Description',
            rows: 4,
            isRequired: false,
            type: 'tallString',
            islandType: 'full',
            islandFieldName: 'aptBusinessObjectDescription',
          },
        ],
      },
      {
        islandType: 'half',
        islandFields: [
          {
            name: 'responsibleDepartmentAtCompany',
            label: 'Responsible Department at Owner Company',
            isRequired: false,
            type: 'select',
            options: [
              {
                value: 'BUSINESS_DEVELOPMENT',
                label: 'Business Development',
              },
              {
                value: 'CLINICAL_RESEARCH',
                label: 'Clinical Research',
              },
              {
                value: 'CONTRACT_MANAGEMENT',
                label: 'Contract Management',
              },
              {
                value: 'CORPORATE_MANAGEMENT',
                label: 'Corporate Management',
              },
              {
                value: 'CUSTOMER_SERVICE',
                label: 'Customer Service',
              },
              {
                value: 'ENGINEERING',
                label: 'Engineering',
              },
              {
                value: 'INFORMATION_TECHNOLOGY',
                label: 'Information Technology',
              },
              {
                value: 'OPERATIONS',
                label: 'Operations',
              },
              {
                value: 'PACKAGING',
                label: 'Packaging',
              },
              {
                value: 'PRODUCTION_OR_MANUFACTURING',
                label: 'Production or Manufacturing',
              },
              {
                value: 'PROJECT_MANAGEMENT',
                label: 'Project Management',
              },
              {
                value: 'PURCHASING',
                label: 'Purchasing',
              },
              {
                value: 'QUALITY_ASSURANCE_CONTROL_OR_VALIDATION',
                label: 'Quality Assurance, Control or Validation',
              },
              {
                value: 'RESEARCH_DEVELOPMENT_OR_FORMULATION',
                label: 'Research, Development, or Formulation',
              },
              {
                value: 'SALES_OR_MARKETING',
                label: 'Sales or Marketing',
              },
              {
                value: 'SUPPLY_CHAIN',
                label: 'Supply Chain',
              },
            ],
            islandType: 'half',
            islandFieldName: 'responsibleDepartmentAtCompany',
          },
          {
            name: 'initiatingCompany',
            label: 'Initiating Company',
            isRequired: false,
            isEditable: true,
            isLuceneQuery: false,
            rowLimit: 10,
            gqlVariables: {
              type: 'StoryBookTypeaheadQuery',
              value: '',
              pageIndex: 0,
              pageSize: 1000,
              sortField: 'email',
              sortAsc: true,
            },
            typeQualifier: {
              query:
                'mutation initiatingCompany{genericActionCall(action: "Searchpartnercompanies",payload: {searchString: "", masterdataObjectTypes: ["PARTNER", "COMPANY"]}){result}}',
              map: '{"data":{"path":"data","nested":{"guid":"guid","label":"businessName","toId":"guid","toIdType":"masterdataObjectType"}}}',
            },
            filterOptions: null,
            type: 'typeahead',
            islandType: 'half',
            islandFieldName: 'initiatingCompany',
          },
        ],
      },
      {
        islandType: 'half',
        islandFields: [
          {
            name: 'responsiblePartyAtCompany',
            isEditable: true,
            isLuceneQuery: false,
            rowLimit: 10,
            gqlVariables: {
              type: 'StoryBookTypeaheadQuery',
              value: '',
              pageIndex: 0,
              pageSize: 1000,
              sortField: 'email',
              sortAsc: true,
            },
            typeQualifier: {
              query:
                'mutation responsiblePartyAtCompany{genericActionCall(action:"Getusersbyprocessnetwork" payload:{processNetworkId:"{{processNetworkId}}" networkNodeId:"{{companyId}}"}){result}}',
              map: '{"data":{"path":"userDropDowns","nested":{"id":"id","label":"name"}}}',
            },
            label: 'Responsible Party at Owner Company',
            filterOptions: null,
            isRequired: false,
            type: 'typeahead',
            islandType: 'half',
            islandFieldName: 'responsiblePartyAtCompany',
          },
          {
            name: 'approvalDueDate',
            label: 'Approval Due Date',
            isRequired: false,
            type: 'customDatePicker',
            daysOffset: 7,
            islandType: 'half',
            islandFieldName: 'approvalDueDate',
          },
        ],
      },
      {
        islandType: 'half',
        islandFields: [
          {
            name: 'businessPriority',
            isRequired: true,
            label: 'Priority',
            type: 'select',
            options: [
              {
                value: 'CRITICAL',
                label: 'Critical',
              },
              {
                value: 'HIGH',
                label: 'High',
              },
              {
                value: 'MEDIUM',
                label: 'Medium',
              },
              {
                value: 'LOW',
                label: 'Low',
              },
            ],
            islandType: 'half',
            islandFieldName: 'businessPriority',
          },
        ],
      },
      {
        islandType: 'half',
        arrayName: 'currentlyAssignedCompanyUsers',
        isArrayInput: true,
        islandFields: [
          {
            name: 'currentlyAssignedCompanyUsers',
            isEditable: true,
            isLuceneQuery: false,
            rowLimit: 10,
            gqlVariables: {
              type: 'StoryBookTypeaheadQuery',
              value: '',
              pageIndex: 0,
              pageSize: 1000,
              sortField: 'email',
              sortAsc: true,
            },
            typeQualifier: {
              query:
                'mutation getCurrentlyAssignedCompanyUsers{genericActionCall(action:"Getusersbyprocessnetwork" payload:{processNetworkId:"{{processNetworkId}}" networkNodeId:"{{companyId}}"}){result}}',
              map: '{"data":{"path":"userDropDowns","nested":{"id":"id","label":"name"}}}',
            },
            label: 'Current Assignees at Owner Company',
            filterOptions: null,
            isRequired: false,
            type: 'typeahead',
            islandType: 'half',
          },
        ],
      },
      {
        islandType: 'full',
        islandFields: [
          {
            backgroundColor: 'transparent',
            isEditable: true,
            headerLabel: 'Document',
            name: 'aptDocumentBox.addAttachment',
            label: 'Document',
            subTitle: 'Drag and drop files, or browse',
            isRequired: false,
            type: 'uploadFile',
            format: 'attachments',
            formatProps: {},
            heightOverride: '112px',
            applicationName: 'agile-process-teams',
            mpfMessageTypeName:
              'agile-process-teams:file-import-notification:v1',
            transformVersion: 1,
            islandType: 'full',
            islandFieldName: 'aptDocumentBox.addAttachment',
          },
        ],
      },
    ],
  },
  {
    groupName: 'Partner Information',
    groupId: 'partnerInformation',
    expandByDefault: true,
    disableAutosave: true,
    islands: [
      {
        islandType: 'half',
        islandFields: [
          {
            name: 'partnerCompany',
            label: 'Partner Company',
            isRequired: false,
            isEditable: true,
            isLuceneQuery: false,
            rowLimit: 10,
            defaultValue: ' ',
            gqlVariables: {
              type: 'StoryBookTypeaheadQuery',
              value: '',
              pageIndex: 0,
              pageSize: 1000,
              sortField: 'email',
              sortAsc: true,
            },
            typeQualifier: {
              query:
                'mutation getPartnerCompany{genericActionCall(action: "searchpartnercompanies",payload: {searchString: "", masterdataObjectTypes: ["PARTNER"]}){result}}',
              map: '{"data":{"path":"data","nested":{"id":"guid","guid":"guid","label":"businessName","partnerId":"guid","toIdType":"masterdataObjectType"}}}',
            },
            publishedEvents: [
              {
                eventName: 'onPartnerCompanySelect',
                emittedEvent: 'onSelectObject',
                customScript: 'const args = arguments[0]; return args;',
              },
              {
                eventName: 'onPartnerCompanyCleared',
                emittedEvent: 'onSelectCleared',
                customScript:
                  "const args = arguments[0]; console.log('onSelectCleared publish', this); return args;",
              },
            ],
            filterOptions: null,
            type: 'typeahead',
            islandType: 'half',
            islandFieldName: 'partnerCompany',
          },
        ],
      },
      {
        islandType: 'half',
        islandFields: [
          {
            name: 'responsibleDepartmentAtPartner',
            label: 'Responsible Department at Partner',
            isRequired: false,
            type: 'select',
            options: [
              {
                value: 'BUSINESS_DEVELOPMENT',
                label: 'Business Development',
              },
              {
                value: 'CLINICAL_RESEARCH',
                label: 'Clinical Research',
              },
              {
                value: 'CONTRACT_MANAGEMENT',
                label: 'Contract Management',
              },
              {
                value: 'CORPORATE_MANAGEMENT',
                label: 'Corporate Management',
              },
              {
                value: 'CUSTOMER_SERVICE',
                label: 'Customer Service',
              },
              {
                value: 'ENGINEERING',
                label: 'Engineering',
              },
              {
                value: 'INFORMATION_TECHNOLOGY',
                label: 'Information Technology',
              },
              {
                value: 'OPERATIONS',
                label: 'Operations',
              },
              {
                value: 'PACKAGING',
                label: 'Packaging',
              },
              {
                value: 'PRODUCTION_OR_MANUFACTURING',
                label: 'Production or Manufacturing',
              },
              {
                value: 'PROJECT_MANAGEMENT',
                label: 'Project Management',
              },
              {
                value: 'PURCHASING',
                label: 'Purchasing',
              },
              {
                value: 'QUALITY_ASSURANCE_CONTROL_OR_VALIDATION',
                label: 'Quality Assurance, Control or Validation',
              },
              {
                value: 'RESEARCH_DEVELOPMENT_OR_FORMULATION',
                label: 'Research, Development, or Formulation',
              },
              {
                value: 'SALES_OR_MARKETING',
                label: 'Sales or Marketing',
              },
              {
                value: 'SUPPLY_CHAIN',
                label: 'Supply Chain',
              },
            ],
            islandType: 'half',
            islandFieldName: 'responsibleDepartmentAtPartner',
          },
        ],
      },
      {
        islandType: 'half',
        islandFields: [
          {
            name: 'responsiblePartyAtPartner',
            isEditable: true,
            isLuceneQuery: false,
            rowLimit: 10,
            gqlVariables: {
              type: 'StoryBookTypeaheadQuery',
              value: '',
              pageIndex: 0,
              pageSize: 1000,
              sortField: 'email',
              sortAsc: true,
            },
            waitForEvent: true,
            typeQualifier: {
              query:
                'mutation getResponsiblePartyAtPartner($id: String!){  genericActionCall( action: "Searchpartneruser" payload: { partnerId: $id }  ) { result  __typename  }}',
              map: '{"data":{"path":"userDropDown","formatting":"function(users) { const unAssignedObj = { label: \'Unassigned\', id: \'\' }; const result = users.map(user => { return { label: user.name, id: user.id }; }); result.push(unAssignedObj); return result; }"}}',
            },
            subscribedEvents: [
              {
                eventName: 'onPartnerCompanySelect',
                customScript:
                  "const args = arguments[0]; const { has } = this._utils; let value;  if (has(args, ['id'])) { value = args.id; } else { value = args.partnerId; } this.setId(value)",
              },
              {
                eventName: 'onPartnerCompanyCleared',
                customScript:
                  "console.log('onSelectCleared subscribe', this); this.clearSelection();",
              },
            ],
            label: 'Responsible Party at Partner Company',
            filterOptions: null,
            isRequired: false,
            type: 'typeahead',
            islandType: 'half',
            islandFieldName: 'responsiblePartyAtPartner',
          },
        ],
      },
      {
        islandType: 'half',
        arrayName: 'currentlyAssignedPartnerUsers',
        isArrayInput: true,
        islandFields: [
          {
            name: 'currentlyAssignedPartnerUser',
            isEditable: true,
            isLuceneQuery: false,
            rowLimit: 10,
            gqlVariables: {
              type: 'StoryBookTypeaheadQuery',
              value: '',
              pageIndex: 0,
              pageSize: 1000,
              sortField: 'email',
              sortAsc: true,
            },
            waitForEvent: true,
            typeQualifier: {
              query:
                'mutation getCurrentlyAssignedPartnerUsers($id: String!){  genericActionCall( action: "Searchpartneruser" payload: { partnerId: $id } ) { result  __typename  }}',
              map: '{"data":{"path":"userDropDown","formatting":"function(users) { const unAssignedObj = { label: \'Unassigned\', id: \'\' }; const result = users.map(user => { return { label: user.name, id: user.id }; }); result.push(unAssignedObj); return result; }"}}',
            },
            subscribedEvents: [
              {
                eventName: 'onPartnerCompanySelect',
                customScript:
                  "const args = arguments[0]; const { has } = this._utils; let value;  if (has(args, ['id'])) { value = args.id; } else { value = args.partnerId; } this.setId(value)",
              },
              {
                eventName: 'onPartnerCompanyCleared',
                customScript:
                  "console.log('onSelectCleared subscribe', this); this.clearSelection();",
              },
            ],
            label: 'Current Assignees at Partner Company',
            filterOptions: null,
            isRequired: false,
            type: 'typeahead',
            islandType: 'half',
          },
        ],
      },
    ],
  },
  {
    groupName: 'Impact',
    groupId: 'impact',
    expandByDefault: true,
    disableAutosave: true,
    islands: [
      {
        islandType: 'full',
        islandFields: [
          {
            name: 'batchRecordReviewImpact.severity',
            label: 'Severity Of Quality Issues',
            isEditable: true,
            type: 'select',
            defaultValue: 'NONE',
            options: [
              {
                value: 'NONE',
                label: 'None',
              },
              {
                value: 'MILD',
                label: 'Mild',
              },
              {
                value: 'SEVERE',
                label: 'Severe',
              },
            ],
            islandType: 'full',
            islandFieldName: 'batchRecordReviewImpact.severity',
          },
        ],
      },
      {
        islandType: 'full',
        headerLabel: 'Impacted Products',
        arrayName: 'batchRecordReviewImpact.reviewImpacts',
        isArrayInput: true,
        islandFields: [
          {
            name: 'impactedLots',
            label: 'Impacted Lots',
            isEditable: true,
            type: 'string',
            islandType: 'full',
          },
          {
            arrayName: 'batchRecordReviewImpact.reviewImpacts',
            name: 'reviewImpactedProduct',
            label: 'Item or Packaging Code',
            isEditable: true,
            type: 'typeahead',
            typeQualifier: {
              query:
                'query PMDLuceneQuery($pageIndex:Int $pageSize:Int $sortField:String! $sortAsc:Boolean!){luceneQuery(type:"ProductMasterData" value:"index-packagingInformationAndRegulatoryItemCodesDerivedField:*" pageIndex:$pageIndex pageSize:$pageSize sortField:$sortField sortAsc:$sortAsc){... on ProductMasterData{id data{packagingInformationAndRegulatoryItemCodesDerivedField}}}}',
              map: '{"data":{"path":"luceneQuery","nested":{"id":"id","label":"data.packagingInformationAndRegulatoryItemCodesDerivedField"}}}',
            },
            isLuceneQuery: true,
            gqlVariables: {
              type: 'StoryBookTypeaheadQuery',
              pageIndex: 0,
              pageSize: 1000,
              sortField:
                'index-packagingInformationAndRegulatoryItemCodesDerivedField',
              sortAsc: false,
            },
            filterOptions: null,
            islandType: 'full',
          },
          {
            arrayName: 'batchRecordReviewImpact.reviewImpacts',
            name: 'reviewImpactedLocationsMasterData.locationType',
            label: 'Location Type',
            isEditable: true,
            type: 'select',
            options: [
              {
                value: 'INTERNAL',
                label: 'Internal',
              },
              {
                value: 'EXTERNAL',
                label: 'External',
              },
            ],
            islandType: 'full',
          },
          {
            arrayName: 'batchRecordReviewImpact.reviewImpacts',
            name: 'reviewImpactedLocationsMasterData.locationId',
            label: 'Impacted Location',
            isRequired: false,
            isEditable: true,
            isLuceneQuery: false,
            rowLimit: 10,
            gqlVariables: {
              type: 'StoryBookTypeaheadQuery',
              value: '',
              pageIndex: 0,
              pageSize: 1000,
              sortField: 'email',
              sortAsc: true,
            },
            typeQualifier: {
              query:
                'mutation AllLocationsMDX{genericActionCall(action: "searchpartnerlocations",payload: {searchString: "", masterdataObjectTypes: ["PARTNER_LOCATION", "COMPANY_LOCATION"]}){result}}',
              map: '{"data":{"path":"data","nested":{"guid":"guid","label":"businessName","impactedLocationId":"guid","toIdType":"masterdataObjectType"}}}',
            },
            filterOptions: null,
            type: 'typeahead',
            islandType: 'full',
          },
          {
            arrayName: 'batchRecordReviewImpact.reviewImpacts',
            name: 'reviewImpactedLocationsMasterData.locationContact',
            label: 'Contact',
            isEditable: true,
            type: 'string',
            islandType: 'full',
          },
        ],
      },
      {
        islandType: 'half',
        headerLabel: 'Impacted Products',
        arrayName: 'batchRecordReviewImpact.reviewImpacts',
        isArrayInput: true,
        islandFields: [
          {
            arrayName: 'batchRecordReviewImpact.reviewImpacts',
            name: 'reviewReferenceIdentifier.referenceTransactionType',
            label: 'Reference ID Type',
            isEditable: true,
            type: 'select',
            options: [],
            islandType: 'half',
          },
          {
            arrayName: 'batchRecordReviewImpact.reviewImpacts',
            name: 'reviewReferenceIdentifier.value',
            label: 'Value',
            isEditable: true,
            type: 'string',
            islandType: 'half',
          },
        ],
      },
    ],
  },
  {
    groupName: 'Conclusion',
    groupId: 'conclusion',
    expandByDefault: true,
    disableAutosave: true,
    isViewOnly: false,
    islands: [
      {
        islandType: 'half',
        islandFields: [
          {
            name: 'batchRecordReviewConclusion.reviewResolutionType',
            label: 'Resolution Type',
            isRequired: false,
            isEditable: false,
            type: 'string',
            islandType: 'half',
            islandFieldName: 'batchRecordReviewConclusion.reviewResolutionType',
          },
          {
            name: 'batchRecordReviewConclusion.approver',
            label: 'Approver',
            isRequired: false,
            isEditable: false,
            type: 'string',
            islandType: 'half',
            islandFieldName: 'batchRecordReviewConclusion.approver',
          },
          {
            name: 'batchRecordReviewConclusion.rightFirstTime',
            label: 'Right First Time',
            onLabel: 'Yes',
            offLabel: 'No',
            defaultValue: ' ',
            isRequired: false,
            isEditable: false,
            type: 'boolean',
            islandType: 'half',
            islandFieldName: 'batchRecordReviewConclusion.rightFirstTime',
          },
          {
            name: 'batchRecordReviewConclusion.dateClosed',
            label: 'Date Closed',
            isRequired: false,
            type: 'customDatePicker',
            daysOffset: 7,
            isEditable: false,
            islandType: 'half',
            islandFieldName: 'batchRecordReviewConclusion.dateClosed',
          },
        ],
      },
    ],
  },
];

const type = 'isEditable';

if (formGroup && Object.keys(formGroup).length) {
  for (const group of formGroup) {
    for (const island of group.islands) {
      const field = (island.islandFields || []).find((field) => field[type]);
      if (field) {
        console.log('here', field.isEditable)
        isEditable = true;
        break;
      }
    }
    if (isEditable) break;
  }
}
console.log(isEditable);
