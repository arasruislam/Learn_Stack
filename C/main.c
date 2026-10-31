// Find Second Largest Number

#include <stdio.h>
#include <limits.h>

int findSecondLargestNumber(int arr[], int n)
{
  if (n < 2)
    return -1;

  int first_lst = INT_MIN;
  int second_lst = INT_MIN;

  for (int i = 0; i < n; i++)
  {
    if (arr[i] > first_lst)
    {
      second_lst = first_lst;
      first_lst = arr[i];
    }
    else if (arr[i] < first_lst && arr[i] > second_lst)
    {
      second_lst = arr[i];
    }
  }

  return (second_lst == INT_MIN) ? -1 : second_lst;
}

int main()
{
  int arr[] = {1, 42, 73, 9, 5, 99, 33};
  int n = sizeof(arr) / sizeof(arr[0]);

  int result = findSecondLargestNumber(arr, n);

  if (result != -1)
  {
    printf("Second Largest: %d\n", result);
  }
  else
  {
    printf("No second largest element exists.\n");
  }

  return 0;
}
