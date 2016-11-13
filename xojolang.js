/*
Language: Xojo
Author: Garry Pettet <contact@garrypettet.com>
*/

function(hljs) {
  return {
    aliases: ['xojo'],
    case_insensitive: true,
    keywords: {
      keyword:
        'AddHandler AddressOf Array As Assigns Break ByRef ByVal ' + /* a-b */
        'Call Case Catch Const Continue CType Declare Dim Do DownTo ' + /* c-d */
        'Each Else End Enum Exception Exit Extends Finally For Function ' + /* e-f */
        'GetTypeInfo Goto If In ' + /* g-i */
        'Lib Loop Next Optional ParamArray' + /* l-p */
        'Raise RaiseEvent Redim RemoveHandler Return ' + /* r */
        'Select Soft Static Step Sub Super ' + /* s */
        'Then To Try Until Wend While ', /* t-w */
      built_in:
        'Auto Boolean CFStringRef Color CString Currency ' +  /* a-c */
        'Delegate Double Int8 Int16 Int32 Int64 Integer OSType ' + /* d-o */
        'PString Ptr Short Single String Structure UInt8 UInt16 UInt32 UInt64 UShort ' + /* s-u */
        'WindowPtr WString XMLNodeType', /* w-x */
      literal:
        'True False Nil'
    },
    contains: [
      hljs.inherit(hljs.QUOTE_STRING_MODE, {contains: [{begin: '""'}]}),
      hljs.COMMENT(
        '\'',
        '$',
        {
          returnBegin: true,
          contains: [
            {
              className: 'doctag',
              begin: '\'\'\'|<!--|-->',
              contains: [hljs.PHRASAL_WORDS_MODE]
            },
            {
              className: 'doctag',
              begin: '</?', end: '>',
              contains: [hljs.PHRASAL_WORDS_MODE]
            }
          ]
        }
      ),
      hljs.C_NUMBER_MODE,
      {
        className: 'meta',
        begin: '#', end: '$',
        keywords: {'meta-keyword': 'if else elseif pragma'}
      }
    ]
  };
}
